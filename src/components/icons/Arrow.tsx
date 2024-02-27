import { TSVGProps } from "./types";

const Arrow = (props: TSVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
        <path d="M11.6667 4.1084L10.4167 5.3584L14.2253 9.16699H2.5V10.8337H14.2253L10.4167 14.6423L11.6667 15.8923L17.5586 10.0003L11.6667 4.1084Z" fill="currentColor"/>
    </svg>
  );
};

export default Arrow;
