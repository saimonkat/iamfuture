import { TSVGProps } from "../types";

const CardPayment = (props: TSVGProps) => {
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
        d="M31.5 22.5H13.5C11.8425 22.5 10.5 21.1575 10.5 19.5V7.5C10.5 5.8425 11.8425 4.5 13.5 4.5H31.5C33.1575 4.5 34.5 5.8425 34.5 7.5V19.5C34.5 21.1575 33.1575 22.5 31.5 22.5Z"
        fill="url(#paint0_linear_467_3120)"
      />
      <path
        d="M19.9155 18.6465L14.2275 20.0685C12.3345 20.541 10.5 19.11 10.5 17.157V10.5H9.1995C7.2 10.5 5.331 11.496 4.218 13.158L1.5 17.2095V27C1.5 29.4855 3.5145 31.5 6 31.5H8.997C10.9455 31.5 12.8415 30.867 14.4 29.697L22.3305 23.742C23.3265 23.001 23.733 21.7035 23.34 20.526C22.8675 19.101 21.3735 18.282 19.9155 18.6465Z"
        fill="url(#paint1_linear_467_3120)"
      />
      <path
        d="M34.5 7.5H10.5V10.5H34.5V7.5Z"
        fill="url(#paint2_linear_467_3120)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_467_3120"
          x1="11.1042"
          y1="1.01182"
          x2="35.9796"
          y2="5.57309"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A9EDFF" />
          <stop offset="1" stopColor="#FEDAFE" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_467_3120"
          x1="2.05352"
          y1="6.43045"
          x2="25.1314"
          y2="9.75356"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A9EDFF" />
          <stop offset="1" stopColor="#FEDAFE" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_467_3120"
          x1="11.1042"
          y1="6.91864"
          x2="22.7363"
          y2="19.7161"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A9EDFF" />
          <stop offset="1" stopColor="#FEDAFE" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CardPayment;
