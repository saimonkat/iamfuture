import { TSVGProps } from "../types";

const SecurityLock = (props: TSVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <path
        opacity="0.35"
        d="M32.92 11.961C33.0055 10.446 31.942 9.0555 30.4435 8.808C24.217 7.7835 24.6955 3 17.9995 3C11.3035 3 11.782 7.7835 5.55553 8.808C4.05703 9.054 2.99353 10.4445 3.07903 11.961C3.72103 23.406 8.30053 28.8435 17.9995 33C27.6985 28.8435 32.278 23.406 32.92 11.961Z"
        fill="url(#paint0_linear_467_3186)"
      />
      <path
        d="M21 16.5C21 14.8425 19.6575 13.5 18 13.5C16.3425 13.5 15 14.8425 15 16.5C15 17.607 15.6075 18.564 16.5 19.0845V21C16.5 21.828 17.172 22.5 18 22.5C18.828 22.5 19.5 21.828 19.5 21V19.0845C20.3925 18.564 21 17.607 21 16.5Z"
        fill="url(#paint1_linear_467_3186)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_467_3186"
          x1="3.82567"
          y1="-2.81364"
          x2="35.2175"
          y2="1.48199"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A9EDFF" />
          <stop offset="1" stopColor="#FEDAFE" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_467_3186"
          x1="15.151"
          y1="11.7559"
          x2="21.5254"
          y2="12.3403"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A9EDFF" />
          <stop offset="1" stopColor="#FEDAFE" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SecurityLock;
