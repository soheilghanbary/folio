import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export { tv } from "tailwind-variants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
