import { TSVGProps } from "./types";

const Close = (props: TSVGProps) => {
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
        d="M1.84606 0L23.9988 22.1538L22.1527 24L0 1.84615L1.84606 0Z"
        fill="currentColor"
      />
      <path
        d="M22.1563 0L0.00361718 22.1538L1.84968 24L24.0024 1.84615L22.1563 0Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Close;
