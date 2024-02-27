import { HTMLAttributes } from "react";
import { Button } from "@/UI/button";
import { Icons } from "../icons";
import { cn } from "@/lib/utils";

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
    <div
      className={cn(
        "flex w-full items-center md:flex-grow gap-6 md:flex-col md:gap-0 md:space-y-6 md:px-8 md:py-4 xl:flex-col",
        className,
      )}
      {...props}
    >
      <div>
        <div className="rounded-full p-[1.5px] md:flex md:h-20 md:w-20 md:shrink-0 md:items-center md:justify-center">
          <div className="rounded-full bg-blue-primary-600 p-5 dark:grayscale md:flex md:h-20 md:w-20 md:shrink-0 md:items-center md:justify-center">
            {icon || <Icons.Gradient.CustomerSupport />}
          </div>
        </div>
      </div>
      <div className="flex w-full md:flex-grow items-center justify-between gap-3 text-center md:flex-col xl:gap-0 xl:space-y-2">
        <div className="flex max-w-[240px] items-start text-start text-lg font-semibold md:mb-6 md:text-center flex-1 xl:text-xl">
          {title}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="hidden text-base/6 font-semibold md:flex"
        >
          <Button variant="outline">{buttonText}</Button>
        </a>
      </div>
    </div>
  );
};

export default SupportServiceCard;
