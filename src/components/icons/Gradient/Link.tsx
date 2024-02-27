import { TSVGProps } from "../types";

const Link = (props: TSVGProps) => {
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
        d="M24.6206 11.3786C23.4491 10.2071 21.5501 10.2071 20.3786 11.3786L11.3786 20.3786C10.2071 21.5501 10.2071 23.4491 11.3786 24.6206C12.5501 25.7921 14.4491 25.7921 15.6206 24.6206L24.6206 15.6206C25.7921 14.4491 25.7921 12.5501 24.6206 11.3786Z"
        fill="url(#paint0_linear_1252_3469)"
      />
      <path
        opacity="0.35"
        d="M30.5835 5.4165C27.3615 2.1945 22.1385 2.1945 18.9165 5.4165C18.66 5.673 17.673 6.66 17.4165 6.9165C15.0945 9.2385 14.472 12.5955 15.498 15.4995C12.594 14.4735 9.2385 15.0945 6.9165 17.4165C6.66 17.673 5.673 18.66 5.4165 18.9165C2.1945 22.1385 2.1945 27.3615 5.4165 30.5835C8.6385 33.8055 13.8615 33.8055 17.0835 30.5835C17.34 30.327 18.327 29.34 18.5835 29.0835C20.9055 26.7615 21.528 23.4045 20.502 20.5005C23.406 21.5265 26.7615 20.9055 29.0835 18.5835C29.34 18.327 30.327 17.34 30.5835 17.0835C33.8055 13.8615 33.8055 8.6385 30.5835 5.4165Z"
        fill="url(#paint1_linear_1252_3469)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1252_3469"
          x1="10.8776"
          y1="7.59333"
          x2="26.6484"
          y2="9.76218"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A9EDFF" />
          <stop offset="1" stopColor="#FEDAFE" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1252_3469"
          x1="3.75521"
          y1="-2.81364"
          x2="35.2983"
          y2="1.52429"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A9EDFF" />
          <stop offset="1" stopColor="#FEDAFE" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Link;
