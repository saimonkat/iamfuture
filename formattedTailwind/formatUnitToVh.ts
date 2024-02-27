import { formatToVhString } from "./formatToVhString";

const mathPxToVh = (target: number) => target / 10;
const mathRemToVh = (target: number) => target * 1.6;

// INFO: takse object with unit value (supported units are "px" and "rem") calculates ant returns "vh" unit
export const formatUnitToVh = (targetObject: Record<string, string>) => {
  const formattedObject: Record<string, string> = {};

  for (let key in targetObject) {
    if (targetObject[key].endsWith("px")) {
      // Format px -> vh
      formattedObject[key] = formatToVhString(
        targetObject[key],
        "px",
        mathPxToVh,
      );
    } else if (targetObject[key].endsWith("rem")) {
      // Format rem -> vh
      formattedObject[key] = formatToVhString(
        targetObject[key],
        "rem",
        mathRemToVh,
      );
    } else {
      formattedObject[key] = targetObject[key];
    }
  }

  return formattedObject;
};
