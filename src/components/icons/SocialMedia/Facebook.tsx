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
        d="M12.6203 20.9999V14.0389H10.2773V11.3139H12.6203V9.30885C12.6203 6.98485 14.0413 5.71785 16.1153 5.71785C16.8143 5.71585 17.5123 5.75185 18.2073 5.82285V8.25285H16.7793C15.6493 8.25285 15.4293 8.78685 15.4293 9.57485V11.3099H18.1293L17.7783 14.0349H15.4133V20.9999H12.6203Z"
        fill="white"
      />
    </svg>
  );
};
export default Linkedin;
