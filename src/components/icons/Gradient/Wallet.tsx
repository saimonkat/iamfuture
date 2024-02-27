import { TSVGProps } from "../types";

const Wallet = (props: TSVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 44 36"
      fill="none"
      {...props}
    >
      <path
        opacity="0.35"
        d="M32.3984 31.5H10.7984C7.81584 31.5 5.39844 29.4855 5.39844 27V9H32.3984C35.381 9 37.7984 11.0145 37.7984 13.5V27C37.7984 29.4855 35.381 31.5 32.3984 31.5Z"
        fill="url(#paint0_linear_467_3111)"
      />
      <path
        d="M31.5008 22.5C32.9919 22.5 34.2008 21.4926 34.2008 20.25C34.2008 19.0074 32.9919 18 31.5008 18C30.0096 18 28.8008 19.0074 28.8008 20.25C28.8008 21.4926 30.0096 22.5 31.5008 22.5Z"
        fill="url(#paint1_linear_467_3111)"
      />
      <path
        d="M5.39844 9C5.39844 6.5145 7.81584 4.5 10.7984 4.5H26.9984C29.981 4.5 32.3984 6.5145 32.3984 9H5.39844Z"
        fill="url(#paint2_linear_467_3111)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_467_3111"
          x1="6.21406"
          y1="4.63977"
          x2="39.615"
          y2="11.2543"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A9EDFF" />
          <stop offset="1" stopColor="#FEDAFE" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_467_3111"
          x1="28.9367"
          y1="17.128"
          x2="34.5685"
          y2="18.0574"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A9EDFF" />
          <stop offset="1" stopColor="#FEDAFE" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_467_3111"
          x1="6.07812"
          y1="3.62795"
          x2="23.287"
          y2="17.8277"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A9EDFF" />
          <stop offset="1" stopColor="#FEDAFE" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Wallet;
