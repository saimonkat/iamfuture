import { TSVGProps } from "./types";

const BoxTest = (props: TSVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      {...props}
    >
      <rect width="64" height="64" rx="8" fill="#2F3451"/>
    </svg>
  );
};

export default BoxTest;
