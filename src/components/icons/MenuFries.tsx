import { TSVGProps } from "./types";

const MenuFries = (props: TSVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="37"
      height="25"
      viewBox="0 0 37 25"
      fill="none"
      {...props}
    >
      <path d="M0.5 0H28.5V3H0.5V0Z" fill="currentColor" />
      <rect x="0.5" y="11" width="36" height="3" fill="currentColor" />
      <path d="M0.5 22H20.5V25H0.5V22Z" fill="currentColor" />
    </svg>
  );
};

export default MenuFries;
