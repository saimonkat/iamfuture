import { TSVGProps } from "./types";

const Protect = (props: TSVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M12 1L3 5V11C3 18.83 9.439 22.486 12 23C14.561 22.486 21 18.83 21 11V5L12 1ZM12 3.18945L19 6.30078V11C19 17.134 14.215 20.2545 12 20.9375C9.785 20.2545 5 17.134 5 11V6.30078L12 3.18945ZM16.793 7.79492L11 13.5859L8.22852 10.8145L6.81445 12.2285L11 16.4141L18.2051 9.20703L16.793 7.79492Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Protect;
