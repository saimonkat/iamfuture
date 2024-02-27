import { TSVGProps } from "./types";

const Play = (props: TSVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 28 35"
      fill="none"
      {...props}
    >
      <path
        d="M26.4425 14.5894L5.4425 0.590436C4.3645 -0.127013 2.9855 -0.197009 1.8515 0.415448C0.710501 1.0244 0 2.21082 0 3.50223V31.5002C0 32.7917 0.7105 33.9781 1.848 34.587C2.366 34.8635 2.933 35 3.5 35C4.179 35 4.8545 34.8005 5.4425 34.412L26.4425 20.413C27.4155 19.7621 28 18.6702 28 17.5012C28 16.3323 27.4155 15.2404 26.4425 14.5894Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_556_708"
          x1="0.704861"
          y1="-6.78258"
          x2="30.3432"
          y2="-3.52181"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A9EDFF" />
          <stop offset="1" stopColor="#FEDAFE" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Play;
