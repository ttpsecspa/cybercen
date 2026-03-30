import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Prefix a path with the Next.js basePath for static assets */
export function assetPath(path: string): string {
  const base = process.env.NODE_ENV === "production" ? "/cybercen" : "";
  return `${base}${path}`;
}
