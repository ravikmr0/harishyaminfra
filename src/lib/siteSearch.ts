import Fuse, { type FuseResultMatch } from "fuse.js";

import { siteSearchDocuments, type SearchDocument } from "@/data/searchContent";

export interface SearchHit extends SearchDocument {
  score: number;
  titleHighlights: number[][];
  descriptionHighlights: number[][];
  matchedFields: string[];
}

const SEARCH_RESULT_LIMIT = 9;

const fuse = new Fuse(siteSearchDocuments, {
  includeMatches: true,
  includeScore: true,
  ignoreLocation: true,
  minMatchCharLength: 2,
  threshold: 0.38,
  keys: [
    { name: "title", weight: 0.42 },
    { name: "description", weight: 0.22 },
    { name: "category", weight: 0.08 },
    { name: "tags", weight: 0.18 },
    { name: "content", weight: 0.1 },
  ],
});

function normalizeSearchValue(value: string) {
  return value.toLowerCase().trim();
}

function mergeRanges(ranges: number[][]) {
  if (ranges.length <= 1) {
    return ranges;
  }

  const sorted = [...ranges].sort((left, right) => left[0] - right[0]);
  const merged: number[][] = [sorted[0]];

  for (const [start, end] of sorted.slice(1)) {
    const current = merged[merged.length - 1];

    if (start <= current[1] + 1) {
      current[1] = Math.max(current[1], end);
      continue;
    }

    merged.push([start, end]);
  }

  return merged;
}

function getMatchRanges(matches: readonly FuseResultMatch[] | undefined, field: string) {
  if (!matches) {
    return [];
  }

  const ranges = matches
    .filter((match) => String(match.key) === field)
    .flatMap((match) => match.indices.map(([start, end]) => [start, end]));

  return mergeRanges(ranges);
}

function getFallbackRanges(text: string, query: string) {
  const normalizedText = text.toLowerCase();
  const tokens = Array.from(
    new Set(
      query
        .toLowerCase()
        .split(/\s+/)
        .map((token) => token.trim())
        .filter((token) => token.length > 1),
    ),
  );

  const ranges: number[][] = [];

  for (const token of tokens) {
    let fromIndex = 0;

    while (fromIndex < normalizedText.length) {
      const start = normalizedText.indexOf(token, fromIndex);

      if (start === -1) {
        break;
      }

      ranges.push([start, start + token.length - 1]);
      fromIndex = start + token.length;
    }
  }

  return mergeRanges(ranges);
}

function getAdjustedScore(document: SearchDocument, baseScore: number, query: string) {
  const normalizedQuery = normalizeSearchValue(query);
  const normalizedTitle = normalizeSearchValue(document.title);
  const normalizedDescription = normalizeSearchValue(document.description);
  const normalizedTags = document.tags.map(normalizeSearchValue);

  let adjustment = 0;

  if (normalizedTitle.startsWith(normalizedQuery)) {
    adjustment += 0.25;
  } else if (normalizedTitle.includes(normalizedQuery)) {
    adjustment += 0.12;
  }

  if (normalizedDescription.includes(normalizedQuery)) {
    adjustment += 0.06;
  }

  if (normalizedTags.some((tag) => tag.includes(normalizedQuery))) {
    adjustment += 0.08;
  }

  adjustment += Math.min(document.popularity / 1000, 0.12);

  return Math.max(0, baseScore - adjustment);
}

function toSearchHit(document: SearchDocument, query = "", score = 1, matches?: readonly FuseResultMatch[]): SearchHit {
  const titleHighlights = getMatchRanges(matches, "title");
  const descriptionHighlights = getMatchRanges(matches, "description");

  return {
    ...document,
    score,
    titleHighlights: titleHighlights.length > 0 ? titleHighlights : query ? getFallbackRanges(document.title, query) : [],
    descriptionHighlights:
      descriptionHighlights.length > 0
        ? descriptionHighlights
        : query
          ? getFallbackRanges(document.description, query)
          : [],
    matchedFields: matches ? Array.from(new Set(matches.map((match) => String(match.key)))) : [],
  };
}

export function getDefaultSearchResults(limit = 6) {
  return [...siteSearchDocuments]
    .sort((left, right) => right.popularity - left.popularity)
    .slice(0, limit)
    .map((document) => toSearchHit(document, "", 0));
}

export function getSuggestedSearchResults(query: string, limit = 4) {
  const normalizedQuery = normalizeSearchValue(query);

  if (!normalizedQuery) {
    return getDefaultSearchResults(limit);
  }

  const suggestions = [...siteSearchDocuments]
    .filter((document) => !normalizeSearchValue(document.title).includes(normalizedQuery))
    .sort((left, right) => right.popularity - left.popularity)
    .slice(0, limit);

  return suggestions.map((document) => toSearchHit(document, "", 0));
}

export function searchSite(query: string, limit = SEARCH_RESULT_LIMIT) {
  const normalizedQuery = normalizeSearchValue(query);

  if (normalizedQuery.length < 2) {
    return getDefaultSearchResults(limit);
  }

  return fuse
    .search(normalizedQuery, { limit: Math.max(limit * 3, 18) })
    .map((result) => ({
      hit: toSearchHit(
        result.item,
        normalizedQuery,
        getAdjustedScore(result.item, result.score ?? 1, normalizedQuery),
        result.matches,
      ),
    }))
    .sort((left, right) => left.hit.score - right.hit.score)
    .slice(0, limit)
    .map(({ hit }) => hit);
}
