import { formatUnitToVh } from "./formatUnitToVh";
import { defaultTW } from "./defaultTW";
import { customTW } from "./customValues";

const spacing: Record<string, string> = {
  ...defaultTW.spacing,
  ...customTW.spacing,
};
const maxWidth: Record<string, string> = {
  ...defaultTW.maxWidth,
  ...customTW.maxWidth,
};
const lineHeight: Record<string, string> = {
  ...defaultTW.lineHeight,
  ...customTW.lineHeight,
};

const fontSize = {
  ...defaultTW.fontSize,
  ...customTW.fontSize,
};

const columns: Record<string, string> = defaultTW.columns;
const width: Record<string, string> = customTW.width;
const minWidth: Record<string, string> = customTW.minWidth;
const minHeight: Record<string, string> = customTW.minHeight;

export const formattedTWLavlues = {
  spacing: formatUnitToVh(spacing),
  maxWidth: formatUnitToVh(maxWidth),
  lineHeight: formatUnitToVh(lineHeight),
  columns: formatUnitToVh(columns),
  width: formatUnitToVh(width),
  minWidth: formatUnitToVh(minWidth),
  minHeight: formatUnitToVh(minHeight),
  fontSize,
};
