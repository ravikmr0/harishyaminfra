import {
  startTransition,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { ArrowUpRight, CornerDownLeft, Search, Sparkles, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { popularSearchTerms } from "@/data/searchContent";
import { getDefaultSearchResults, getSuggestedSearchResults, searchSite, type SearchHit } from "@/lib/siteSearch";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

type SearchModalProps = {
  onOpenChange: (open: boolean) => void;
  open: boolean;
};

function HighlightedText({
  ranges,
  text,
}: {
  ranges: number[][];
  text: string;
}) {
  if (ranges.length === 0) {
    return <>{text}</>;
  }

  const content: ReactNode[] = [];
  let cursor = 0;

  ranges.forEach(([start, end], index) => {
    if (cursor < start) {
      content.push(<span key={`text-${index}-${cursor}`}>{text.slice(cursor, start)}</span>);
    }

    content.push(
      <mark
        key={`highlight-${index}-${start}`}
        className="rounded bg-[rgba(231,199,166,0.68)] px-0.5 text-[color:var(--brand-ink)]"
      >
        {text.slice(start, end + 1)}
      </mark>,
    );

    cursor = end + 1;
  });

  if (cursor < text.length) {
    content.push(<span key={`tail-${cursor}`}>{text.slice(cursor)}</span>);
  }

  return <>{content}</>;
}

function getDestinationLabel(href: string) {
  const [path, hash] = href.split("#");
  const pageLabel =
    path === "/" ? "Home" : path.replace(/^\//, "").replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

  if (!hash) {
    return pageLabel;
  }

  const sectionLabel = hash.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
  return `${pageLabel} / ${sectionLabel}`;
}

export default function SearchModal({ onOpenChange, open }: SearchModalProps) {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    if (!open) {
      setQuery("");
      setDebouncedQuery("");
      setActiveIndex(0);
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [open]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      startTransition(() => {
        setDebouncedQuery(deferredQuery.trim());
      });
    }, 120);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [deferredQuery]);

  const results = useMemo(() => {
    if (debouncedQuery.length < 2) {
      return getDefaultSearchResults(6);
    }

    return searchSite(debouncedQuery, 9);
  }, [debouncedQuery]);

  const suggestions = useMemo(() => getSuggestedSearchResults(debouncedQuery, 4), [debouncedQuery]);

  useEffect(() => {
    setActiveIndex(0);
  }, [debouncedQuery, results.length]);

  const openResult = (result: SearchHit) => {
    onOpenChange(false);
    navigate(result.href);
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onOpenChange(false);
      return;
    }

    if (results.length === 0) {
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((current) => (current + 1) % results.length);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((current) => (current - 1 + results.length) % results.length);
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      openResult(results[activeIndex] ?? results[0]);
    }
  };

  const showEmptyState = debouncedQuery.length >= 2 && results.length === 0;
  const showDefaultState = debouncedQuery.length < 2;

  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogContent className="[&>button]:hidden h-[100dvh] max-w-none overflow-hidden border-none bg-transparent p-0 shadow-none sm:h-auto sm:max-h-[86vh] sm:max-w-5xl">
        <div className="flex h-full flex-col overflow-hidden bg-[rgba(255,252,247,0.98)] shadow-[0_50px_120px_-70px_rgba(15,23,42,0.9)] sm:rounded-[2rem] sm:border sm:border-[rgba(90,78,62,0.16)]">
          <div className="border-b border-[rgba(90,78,62,0.12)] bg-[linear-gradient(135deg,_rgba(255,255,255,0.9),_rgba(247,240,230,0.94))] px-4 py-4 sm:px-6 sm:py-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <DialogTitle className="flex items-center gap-2 text-xl sm:text-2xl">
                  <Search className="h-5 w-5 text-[color:var(--brand-deep)]" />
                  Search Harishyam Infra
                </DialogTitle>
                <DialogDescription className="mt-2 max-w-2xl text-sm text-[rgba(31,44,43,0.68)]">
                  Search projects, services, amenities, FAQs, downloads, team members, and important website content in real time.
                </DialogDescription>
              </div>

              <button
                aria-label="Close search"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(90,78,62,0.14)] bg-white/85 text-[color:var(--brand-ink)] transition-all duration-300 hover:border-[rgba(178,98,67,0.22)] hover:bg-white"
                onClick={() => onOpenChange(false)}
                type="button"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 rounded-[1.4rem] border border-[rgba(90,78,62,0.14)] bg-white/88 p-2 shadow-[0_26px_60px_-50px_rgba(31,44,43,0.4)]">
              <div className="flex items-center gap-3 rounded-[1rem] px-3 py-2">
                <Search className="h-5 w-5 shrink-0 text-[rgba(31,44,43,0.46)]" />
                <input
                  ref={inputRef}
                  aria-activedescendant={results[activeIndex] ? `search-result-${results[activeIndex].id}` : undefined}
                  aria-controls="global-search-results"
                  aria-expanded="true"
                  aria-label="Search the website"
                  className="h-10 w-full bg-transparent text-base text-[color:var(--brand-ink)] outline-none placeholder:text-[rgba(31,44,43,0.4)]"
                  onChange={(event) => setQuery(event.target.value)}
                  onKeyDown={handleInputKeyDown}
                  placeholder="Search projects, FAQs, services, locations, team members..."
                  role="combobox"
                  type="text"
                  value={query}
                />
                <div className="hidden items-center gap-2 sm:flex">
                  <span className="rounded-full border border-[rgba(90,78,62,0.12)] bg-[rgba(247,240,230,0.8)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(31,44,43,0.55)]">
                    Esc
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div aria-live="polite" className="text-sm text-[rgba(31,44,43,0.62)]">
                {showDefaultState
                  ? "Popular places to start"
                  : showEmptyState
                    ? `No results found for "${debouncedQuery}"`
                    : `${results.length} result${results.length === 1 ? "" : "s"} for "${debouncedQuery}"`}
              </div>

              <div className="flex items-center gap-2 text-xs text-[rgba(31,44,43,0.52)]">
                <CornerDownLeft className="h-3.5 w-3.5" />
                <span>Enter opens the selected result</span>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 pb-4 pt-4 sm:px-6 sm:pb-6">
            <div className="mb-4 flex flex-wrap gap-2">
              {popularSearchTerms.map((term) => (
                <button
                  key={term}
                  className="rounded-full border border-[rgba(90,78,62,0.12)] bg-white px-3 py-2 text-sm text-[rgba(31,44,43,0.72)] transition-all duration-300 hover:border-[rgba(178,98,67,0.22)] hover:bg-[rgba(231,199,166,0.2)] hover:text-[color:var(--brand-ink)]"
                  onClick={() => setQuery(term)}
                  type="button"
                >
                  {term}
                </button>
              ))}
            </div>

            {showEmptyState ? (
              <div className="space-y-5">
                <div className="rounded-[1.6rem] border border-dashed border-[rgba(90,78,62,0.22)] bg-[linear-gradient(135deg,_rgba(255,255,255,0.92),_rgba(247,240,230,0.88))] px-5 py-8 text-center sm:px-8">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(231,199,166,0.34)]">
                    <Sparkles className="h-6 w-6 text-[color:var(--brand-deep)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[color:var(--brand-ink)]">No results found</h3>
                  <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[rgba(31,44,43,0.66)]">
                    Try a shorter keyword, a project name, a location like airport or metro, or a topic such as payment options, security, or investment.
                  </p>
                </div>

                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(31,44,43,0.48)]">
                    Suggested content
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {suggestions.map((result) => (
                      <button
                        key={result.id}
                        className="rounded-[1.3rem] border border-[rgba(90,78,62,0.12)] bg-white p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(178,98,67,0.22)] hover:shadow-[0_24px_55px_-42px_rgba(31,44,43,0.36)]"
                        onClick={() => openResult(result)}
                        type="button"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-deep)]">
                          {result.category}
                        </p>
                        <p className="mt-2 text-lg font-semibold text-[color:var(--brand-ink)]">{result.title}</p>
                        <p className="mt-2 text-sm leading-6 text-[rgba(31,44,43,0.68)]">{result.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {showDefaultState ? (
                  <p className="text-sm text-[rgba(31,44,43,0.58)]">
                    Top destinations across the site for projects, services, FAQs, and downloads.
                  </p>
                ) : null}

                <div aria-label="Search results" id="global-search-results" role="listbox" className="space-y-3">
                  {results.map((result, index) => (
                    <button
                      key={result.id}
                      aria-selected={index === activeIndex}
                      className={cn(
                        "flex w-full flex-col gap-4 rounded-[1.5rem] border bg-white p-4 text-left transition-all duration-300 sm:flex-row sm:items-center",
                        index === activeIndex
                          ? "border-[rgba(178,98,67,0.28)] shadow-[0_30px_70px_-48px_rgba(31,44,43,0.44)]"
                          : "border-[rgba(90,78,62,0.12)] hover:-translate-y-0.5 hover:border-[rgba(178,98,67,0.2)] hover:shadow-[0_24px_60px_-48px_rgba(31,44,43,0.3)]",
                      )}
                      id={`search-result-${result.id}`}
                      onClick={() => openResult(result)}
                      onMouseEnter={() => setActiveIndex(index)}
                      role="option"
                      type="button"
                    >
                      {result.image ? (
                        <img
                          alt={result.title}
                          className="h-24 w-full rounded-[1.1rem] object-cover sm:h-24 sm:w-32"
                          loading="lazy"
                          src={result.image}
                        />
                      ) : (
                        <div className="flex h-24 w-full items-center justify-center rounded-[1.1rem] bg-[linear-gradient(135deg,_rgba(231,199,166,0.4),_rgba(255,255,255,0.95))] sm:w-32">
                          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-deep)]">
                            {result.category.slice(0, 3)}
                          </span>
                        </div>
                      )}

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-[rgba(231,199,166,0.26)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-deep)]">
                            {result.category}
                          </span>
                          <span className="text-xs text-[rgba(31,44,43,0.48)]">{getDestinationLabel(result.href)}</span>
                        </div>

                        <h3 className="mt-3 text-lg font-semibold text-[color:var(--brand-ink)] sm:text-xl">
                          <HighlightedText ranges={result.titleHighlights} text={result.title} />
                        </h3>
                        <p
                          className="mt-2 text-sm leading-6 text-[rgba(31,44,43,0.68)]"
                          style={{
                            display: "-webkit-box",
                            overflow: "hidden",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 2,
                          }}
                        >
                          <HighlightedText ranges={result.descriptionHighlights} text={result.description} />
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-deep)]">
                        <span>Open</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
