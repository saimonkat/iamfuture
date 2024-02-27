import { formatUnitToVh } from "./formatUnitToVh";

export const customTW = {
  spacing: {
    3.75: "0.9375rem", // 15px
    4.25: "1.093rem", // 17.5px
    4.5: "1.125rem", // 18px
    5.625: "1.40625rem", // 22.5px
    7.5: "1.875rem", // 30px
    8.4: "2.343rem", // 37.5px
    11.25: "2.812rem", // 45px
    12.5: "3.125rem", // 50px
    13: "3.25rem", // 52px
    13.5: "3.375rem", // 54px
    13.75: "3.4375rem", // 55px
    15: "3.75rem", // 60px
    6.5: "1.625rem", // 26px
    16.5: "4.125rem", // 66px
    17.5: "4.375rem", // 70px
    18: "4.5rem", // 72px
    22: "5.5rem", // 88px
    23: "5.75rem", // 92px
    25: "6.25rem", // 100px
    27.5: "6.875rem", // 110px
    30: "7.5rem", // 120px
    31.25: "7.8125rem", // 125px
    42: "10.5rem", // 168px
    48.5: "12.125rem", // 196px
    61.25: "15.3125rem", // 245px
    109: "27.25rem", // 436px
    113.5: "28.375rem", // 454px
    117.25: "29.3125rem", // 469px
    180: "46.25rem", // 594px
  },
  maxWidth: {
    "6.5xl": "75.5rem", // 1208px
    "xl-139.5": "34.875rem", // 558px
    "149xxl": "37.25rem", // 596px
    "213xxl": "53.25rem", // 852px
  },
  lineHeight: {
    16: "4rem", // 64px
    25: "6.3125rem", // 100px
  },
  width: {
    22: "5.5rem", // 88px
    16.5: "4.125rem", // 66px
    51.5: "12.875rem", // 206px
    126: "31.5rem", // 504px
  },
  height: {
    51.5: "12.875rem", // 206px
    74: "18.5rem", //296px
  },
  minWidth: {
    104.4: "26.12rem", // 418px
    158.5: "39.625rem", // 634px
    270: "63.25rem", // 1082px
    "1082": "67.625rem", // 1082px
  },
  minHeight: {
    30: "7.5rem", // 120px
  },

  // INFO: needs to be formated from start
  fontSize: {
    "xs-": ["1.1vh", "1.6vh"], // 11px
    ...formatUnitToVh({
      "base-plus": "1.09375rem", // 17.5px
      "1.3xl": "1,375rem", // 22px
      "1.6xl": "1.40625rem", // 22.5px
      "2.2xl": "1.625rem", // 26px
      "2.4xl": "1.75rem", // 28px
      "3.4xl": "2rem", // 32px
      "2.5xl": "1.6rem", // 32px
      "4.4xl": "2.5rem", // 40px
      "4.8xl": "2.8125rem", // 45px
      "5.5xl": "3.5rem", // 56px
      "7.5xl": "5.75rem", // 92px
      "8.5xl": "7.5rem", // 120px
    }),
  },
};
