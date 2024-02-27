import { TSVGProps } from "./types";

const Swap = (props: TSVGProps) => {
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
        d="M8 8L4 12L8 16V13H12.1445C12.5944 14.7158 14.1497 16 16 16C18.1973 16 20 14.1973 20 12C20 9.80271 18.1973 8 16 8C14.1497 8 12.5944 9.28421 12.1445 11H8V8ZM16 10C17.1164 10 18 10.8836 18 12C18 13.1164 17.1164 14 16 14C14.9145 14 14.0568 13.1624 14.0098 12.0898C14.0153 12.0294 14.0153 11.9686 14.0098 11.9082C14.0578 10.8366 14.9151 10 16 10Z"
        fill="#A8ABCB"
      />
    </svg>
  );
};

export default Swap;
