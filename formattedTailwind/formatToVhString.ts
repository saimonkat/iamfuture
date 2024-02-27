// INFO: just takes format and replaces it with vh (example: 10px -> 10vh)
export const formatToVhString = (
  target: string,
  targetFormat: string,
  // INFO: function runs and returns formated number (math format like "px" => "vh")
  mathFunc: (target: number) => number,
): string => {
  if (target.endsWith(targetFormat)) {
    var replaceReg = new RegExp(targetFormat, "g");
    const withoutPX = target.replace(replaceReg, "");

    if (!Number.isNaN(Number(withoutPX))) {
      const formatedValue = mathFunc(Number(withoutPX));

      return `${formatedValue}vh`;
    }
  }

  return target;
};
