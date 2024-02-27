import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

import { Icons } from "../icons";

interface SupportServiceCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  text: string;
  buttonText?: string;
  link?: string;
  icon?: React.ReactElement;
}

const SupportServiceCard = ({
  text,
  title,
  buttonText = "Learn more",
  icon,
  className,
  link,
  ...props
}: SupportServiceCardProps) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div
        className={cn("flex w-full items-center gap-6", className)}
        {...props}
      >
        <div className="rounded-full bg-blue-primary-600 p-5 dark:grayscale">
          {icon || <Icons.Gradient.CustomerSupport />}
        </div>

        <div className="flex w-full items-center justify-between gap-3 text-center">
          <div className="flex max-w-[240px] items-start text-start text-lg font-semibold">
            {title}
          </div>
          <div className="flex h-[12px] w-[14px] shrink-0 items-center justify-center">
            <Icons.Arrow />
          </div>
        </div>
      </div>
    </a>
  );
};

export default SupportServiceCard;
