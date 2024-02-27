import { TSVGProps } from "../types";

const Document = (props: TSVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      {...props}
    >
      <path
        opacity="0.35"
        d="M6.66797 31.6663V8.33301C6.66797 5.57134 8.9063 3.33301 11.668 3.33301H23.3346L33.3346 13.333V31.6663C33.3346 34.428 31.0963 36.6663 28.3346 36.6663H11.668C8.9063 36.6663 6.66797 34.428 6.66797 31.6663Z"
        fill="url(#paint0_linear_280_1725)"
      />
      <path
        d="M23.332 9.99967V3.33301L33.332 13.333H26.6654C24.8237 13.333 23.332 11.8413 23.332 9.99967Z"
        fill="url(#paint1_linear_280_1725)"
      />
      <path
        d="M24.9987 21.6663H14.9987C14.077 21.6663 13.332 20.9197 13.332 19.9997C13.332 19.0797 14.077 18.333 14.9987 18.333H24.9987C25.9204 18.333 26.6654 19.0797 26.6654 19.9997C26.6654 20.9197 25.9204 21.6663 24.9987 21.6663Z"
        fill="url(#paint2_linear_280_1725)"
      />
      <path
        d="M21.6654 28.3333H14.9987C14.077 28.3333 13.332 27.5867 13.332 26.6667C13.332 25.7467 14.077 25 14.9987 25H21.6654C22.587 25 23.332 25.7467 23.332 26.6667C23.332 27.5867 22.587 28.3333 21.6654 28.3333Z"
        fill="url(#paint3_linear_280_1725)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_280_1725"
          x1="7.33926"
          y1="-3.12659"
          x2="35.5662"
          y2="-0.0210924"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A9EDFF" />
          <stop offset="1" stopColor="#FEDAFE" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_280_1725"
          x1="23.5838"
          y1="1.39513"
          x2="34.0981"
          y2="2.8411"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A9EDFF" />
          <stop offset="1" stopColor="#FEDAFE" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_280_1725"
          x1="13.6677"
          y1="17.687"
          x2="24.6336"
          y2="23.7194"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A9EDFF" />
          <stop offset="1" stopColor="#FEDAFE" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_280_1725"
          x1="13.5838"
          y1="24.354"
          x2="22.7387"
          y2="28.1311"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A9EDFF" />
          <stop offset="1" stopColor="#FEDAFE" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Document;
