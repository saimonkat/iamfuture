import { TSVGProps } from "./types";

const Sparkling = (props: TSVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_262_1888)">
        <path
          d="M11.625 7.65L12.3533 9.39675L14.1 10.125L12.3533 10.8532L11.625 12.6L10.8968 10.8532L9.15 10.125L10.8968 9.39675L11.625 7.65ZM11.625 3.75L9.75 8.25L5.25 10.125L9.75 12L11.625 16.5L13.5 12L18 10.125L13.5 8.25L11.625 3.75ZM3.09375 5.90625L4.125 9L5.15625 5.90625L8.25 4.875L5.15625 3.84375L4.125 0.75L3.09375 3.84375L0 4.875L3.09375 5.90625ZM4.78125 13.9688L4.125 12L3.46875 13.9688L1.5 14.625L3.46875 15.2812L4.125 17.25L4.78125 15.2812L6.75 14.625L4.78125 13.9688Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_262_1888">
          <rect width="18" height="18" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Sparkling;
