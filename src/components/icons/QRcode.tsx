import { TSVGProps } from "./types";

const QRcode = (props: TSVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_541_802)">
        <path
          d="M1 0C0.448 0 0 0.448 0 1V5C0 5.552 0.448 6 1 6H5C5.552 6 6 5.552 6 5V1C6 0.448 5.552 0 5 0H1ZM8 0V2H10V0H8ZM13 0C12.448 0 12 0.448 12 1V5C12 5.552 12.448 6 13 6H17C17.552 6 18 5.552 18 5V1C18 0.448 17.552 0 17 0H13ZM2 2H4V4H2V2ZM14 2H16V4H14V2ZM8 4V6H10V4H8ZM0 8V10H2V8H0ZM4 8V10H6V8H4ZM8 8V10H10V8H8ZM10 10V12H12V10H10ZM12 10H14V8H12V10ZM14 10V12H16V10H14ZM16 10H18V8H16V10ZM16 12V14H18V12H16ZM16 14H14V16H16V14ZM16 16V18H18V16H16ZM14 16H12V18H14V16ZM12 16V14H10V16H12ZM10 16H8V18H10V16ZM10 14V12H8V14H10ZM12 14H14V12H12V14ZM1 12C0.448 12 0 12.448 0 13V17C0 17.552 0.448 18 1 18H5C5.552 18 6 17.552 6 17V13C6 12.448 5.552 12 5 12H1ZM2 14H4V16H2V14Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_541_802">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default QRcode;
