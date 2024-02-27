import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface NamedIconProps extends HTMLAttributes<HTMLDivElement> {
  icon: React.ReactElement;
  text: string;
  textClassName?: string;
}

const NamedIcon = ({ icon, text, textClassName, ...props }: NamedIconProps) => {
  return (
    <div {...props}>
      <div className="w-fit rounded-lg bg-blue-primary-600/40 p-4.25 dark:grayscale xl:p-3.5">
        {icon}
      </div>
      <div className={cn("mt-4 max-w-[10.875rem] font-bold", textClassName)}>
        {text}
      </div>
    </div>
  );
};

export default NamedIcon;
