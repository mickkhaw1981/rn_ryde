import { Search, MapPin, X, Crosshair } from "lucide-react-native";
import React from "react";

// Standard icon size and color for input fields
export const ICON_SIZE = 20;
export const ICON_COLOR = "#333333";
export const ICON_STROKE_WIDTH = 1.5;

// Smaller icon size for suggestion items
export const SUGGESTION_ICON_SIZE = 18;
export const SUGGESTION_ICON_COLOR = "#777777";

// Define our own IconProps type since it's not exported from lucide-react-native
interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  style?: any;
}

// Icon factory functions
export const getSearchIcon = (props?: Partial<IconProps>) => (
  <Search
    size={props?.size || ICON_SIZE}
    color={props?.color || ICON_COLOR}
    strokeWidth={props?.strokeWidth || ICON_STROKE_WIDTH}
    style={props?.style}
  />
);

export const getMapPinIcon = (props?: Partial<IconProps>) => (
  <MapPin
    size={props?.size || ICON_SIZE}
    color={props?.color || ICON_COLOR}
    strokeWidth={props?.strokeWidth || ICON_STROKE_WIDTH}
    style={props?.style}
  />
);

export const getCrosshairIcon = (props?: Partial<IconProps>) => (
  <Crosshair
    size={props?.size || ICON_SIZE}
    color={props?.color || ICON_COLOR}
    strokeWidth={props?.strokeWidth || ICON_STROKE_WIDTH}
    style={props?.style}
  />
);

export const getClearIcon = (props?: Partial<IconProps>) => (
  <X
    size={props?.size || 16}
    color={props?.color || "#999999"}
    strokeWidth={props?.strokeWidth || ICON_STROKE_WIDTH}
    style={props?.style}
  />
);

// Helper function to get icon by name
export const getIconByName = (iconName: string, props?: Partial<IconProps>) => {
  switch (iconName) {
    case "search":
      return getSearchIcon(props);
    case "location":
      return getMapPinIcon(props);
    case "crosshair":
      return getCrosshairIcon(props);
    default:
      return getMapPinIcon(props);
  }
};
