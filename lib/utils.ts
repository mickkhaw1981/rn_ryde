import { format } from "date-fns";

/**
 * Format a date string to a readable format
 * @param dateString - The date string to format
 * @returns Formatted date string (e.g., "12 Aug 2024")
 */
export const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    return format(date, "dd MMM yyyy");
  } catch (_error) {
    return "Date unavailable";
  }
};

/**
 * Format ride time in minutes to hours and minutes
 * @param minutes - The ride time in minutes
 * @returns Formatted time string (e.g., "2h 30m")
 */
export const formatTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (hours > 0) {
    return `${hours}h ${mins > 0 ? `${mins}m` : ""}`;
  }

  return `${mins}m`;
};
