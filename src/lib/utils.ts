import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/['".,()/]+/g, "")
    .replace(/&/g, " and ")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}
