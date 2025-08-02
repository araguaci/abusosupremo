import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTranslationKey(str: string): string {
  return str.replace(/ /g, '_').replace(/-/g, '_');
}