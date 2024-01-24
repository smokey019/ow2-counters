import { type ClassValue, clsx } from "clsx"
import { formatDistanceToNow, format } from "date-fns";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function timeAgo(date: string): string {
  const formatted = format(date, "yyyy-LL-dd")
  return formatDistanceToNow(formatted, { addSuffix: true });
}