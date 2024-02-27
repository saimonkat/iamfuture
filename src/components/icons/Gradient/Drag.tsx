import { TSVGProps } from "../types";

const Drag = (props: TSVGProps) => {
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
        d="M20.9998 15.0002V9.00022H22.9408C23.8633 9.00022 24.3268 7.88722 23.6773 7.23322L19.0648 2.57572C18.4783 1.98322 17.5198 1.98322 16.9333 2.57572L12.3223 7.23322C11.6728 7.88722 12.1378 9.00022 13.0588 9.00022H14.9998V15.0002H20.9998Z"
        fill="url(#paint0_linear_847_3936)"
      />
      <path
        opacity="0.35"
        d="M15.0001 21V27H13.0591C12.1366 27 11.6731 28.113 12.3226 28.767L16.9351 33.423C17.5216 34.0155 18.4801 34.0155 19.0666 33.423L23.6791 28.767C24.3271 28.113 23.8621 27 22.9411 27H21.0001V21H15.0001Z"
        fill="url(#paint1_linear_847_3936)"
      />
      <path
        opacity="0.35"
        d="M21 21.0002H27V22.9412C27 23.8637 28.113 24.3272 28.767 23.6777L33.423 19.0652C34.0155 18.4787 34.0155 17.5202 33.423 16.9337L28.767 12.3212C28.113 11.6732 27 12.1382 27 13.0592V15.0002H21V21.0002Z"
        fill="url(#paint2_linear_847_3936)"
      />
      <path
        opacity="0.35"
        d="M15.0017 15.0001H9.00169V13.0591C9.00169 12.1366 7.88869 11.6731 7.23469 12.3226L2.57719 16.9351C1.98469 17.5216 1.98469 18.4801 2.57719 19.0666L7.23319 23.6791C7.88869 24.3271 9.00169 23.8621 9.00169 22.9411V21.0001H15.0017V15.0001Z"
        fill="url(#paint3_linear_847_3936)"
      />
      <path d="M21 15H15V21H21V15Z" fill="url(#paint4_linear_847_3936)" />
      <defs>
        <linearGradient
          id="paint0_linear_847_3936"
          x1="12.3206"
          y1="-0.362486"
          x2="24.9285"
          y2="1.24904"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A9EDFF" />
          <stop offset="1" stopColor="#FEDAFE" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_847_3936"
          x1="12.3206"
          y1="18.5065"
          x2="24.929"
          y2="20.1183"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A9EDFF" />
          <stop offset="1" stopColor="#FEDAFE" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_847_3936"
          x1="21.3239"
          y1="9.70158"
          x2="34.8138"
          y2="11.6973"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A9EDFF" />
          <stop offset="1" stopColor="#FEDAFE" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_847_3936"
          x1="2.45677"
          y1="9.70158"
          x2="15.9481"
          y2="11.6978"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A9EDFF" />
          <stop offset="1" stopColor="#FEDAFE" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_847_3936"
          x1="15.151"
          y1="13.8373"
          x2="21.4597"
          y2="14.7049"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A9EDFF" />
          <stop offset="1" stopColor="#FEDAFE" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Drag;
