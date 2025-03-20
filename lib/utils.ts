import { format } from "date-fns";

import type { Driver, MarkerData } from "@/types/type";

/**
 * Format a date string to a readable format
 * @param dateString - The date string to format
 * @returns Formatted date string (e.g., "12 Aug 2024")
 */
export const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    return format(date, "dd MMM yyyy");
  } catch (error) {
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

/**
 * Maps a database driver result (with 'id') to our Driver interface (with 'driver_id')
 * @param dbDriver - The driver record from database
 * @returns Driver object that matches our TypeScript interface
 */
export const mapDbDriverToInterface = (dbDriver: any): Driver => {
  return {
    driver_id: dbDriver.id, // Map 'id' from DB to 'driver_id' for our interface
    first_name: dbDriver.first_name || "",
    last_name: dbDriver.last_name || "",
    profile_image_url: dbDriver.profile_image_url || "",
    car_image_url: dbDriver.car_image_url || "",
    car_seats: dbDriver.car_seats || 4,
    rating: dbDriver.rating || 4.5,
  };
};

/**
 * Maps a Driver object to MarkerData for map display and driver selection
 * @param driver - The Driver object
 * @param defaultTime - Default time in minutes (optional)
 * @param defaultPrice - Default price (optional)
 * @returns MarkerData object for map and driver selection screens
 */
export const mapDriverToMarkerData = (
  driver: Driver,
  defaultTime: number = 10,
  defaultPrice: string = "10.00"
): MarkerData => {
  return {
    id: driver.driver_id,
    latitude: 0, // Default values for required fields
    longitude: 0,
    title: `${driver.first_name} ${driver.last_name}`,
    profile_image_url: driver.profile_image_url,
    car_image_url: driver.car_image_url,
    car_seats: driver.car_seats,
    rating: driver.rating,
    first_name: driver.first_name,
    last_name: driver.last_name,
    time: defaultTime,
    price: defaultPrice,
  };
};

/**
 * Generic mapper function to convert database results to TypeScript interfaces
 * @param results - Array of database results
 * @param mapper - Function to map each result to the desired interface
 * @returns Array of mapped objects
 */
export function mapDbResults<T, R>(results: T[], mapper: (item: T) => R): R[] {
  return results.map(mapper);
}
