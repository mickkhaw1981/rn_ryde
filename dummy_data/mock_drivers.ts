/**
 * This file contains mock data for drivers to be displayed on the map.
 * Each driver has a unique ID, name, profile image, car image, number of seats, and rating.
 * This data is used for development and testing purposes.
 */

import { Driver } from "@/types/type";

const mockDrivers: Driver[] = [
  {
    driver_id: 1,
    first_name: "John",
    last_name: "Doe",
    profile_image_url: "https://randomuser.me/api/portraits/men/32.jpg",
    car_image_url:
      "https://www.toyota.com/imgix/content/dam/toyota/jellies/max/2023/camry/nightshade/2560x1440/CAM_MY23_0003_V001_desktop_1440x810.png",
    car_seats: 4,
    rating: 4.8,
  },
  {
    driver_id: 2,
    first_name: "Sarah",
    last_name: "Johnson",
    profile_image_url: "https://randomuser.me/api/portraits/women/44.jpg",
    car_image_url:
      "https://www.hyundai.com/content/dam/hyundai/us/images/vehicle-pages/2023/tucson/gallery/gallery-tucson-limited-hybrid-05-1120.jpg",
    car_seats: 5,
    rating: 4.6,
  },
  {
    driver_id: 3,
    first_name: "Michael",
    last_name: "Chen",
    profile_image_url: "https://randomuser.me/api/portraits/men/62.jpg",
    car_image_url:
      "https://www.honda.com/content/dam/central/automobiles/civic/landing-page/2024/insight/MMC/honda-automobiles-civic-2024-exterior-insight-main-1400x600.png",
    car_seats: 5,
    rating: 4.9,
  },
  {
    driver_id: 4,
    first_name: "Olivia",
    last_name: "Martinez",
    profile_image_url: "https://randomuser.me/api/portraits/women/54.jpg",
    car_image_url:
      "https://cdn.jdpower.com/Models/400x200/2023-Tesla-Model3.jpg",
    car_seats: 4,
    rating: 4.7,
  },
];

export default mockDrivers;
