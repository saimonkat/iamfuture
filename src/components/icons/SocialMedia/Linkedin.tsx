import { TSVGProps } from "../types";

const Linkedin = (props: TSVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        opacity="0.35"
        d="M18 21H6C4.343 21 3 19.657 3 18V6C3 4.343 4.343 3 6 3H18C19.657 3 21 4.343 21 6V18C21 19.657 19.657 21 18 21Z"
        fill="white"
      />
      <path
        d="M8.99825 17.0004H6.47525V10.0004H8.99825V17.0004ZM7.69225 8.71738C6.92125 8.71738 6.40625 8.20338 6.40625 7.51738C6.40625 6.83138 6.92025 6.31738 7.77725 6.31738C8.54825 6.31738 9.06325 6.83138 9.06325 7.51738C9.06325 8.20338 8.54925 8.71738 7.69225 8.71738ZM17.9983 17.0004H15.5562V13.1744C15.5562 12.1164 14.9053 11.8724 14.6613 11.8724C14.4172 11.8724 13.6032 12.0354 13.6032 13.1744C13.6032 13.3374 13.6032 17.0004 13.6032 17.0004H11.0802V10.0004H13.6032V10.9774C13.9282 10.4074 14.5793 10.0004 15.8003 10.0004C17.0212 10.0004 17.9983 10.9774 17.9983 13.1744V17.0004Z"
        fill="white"
      />
    </svg>
  );
};

export default Linkedin;