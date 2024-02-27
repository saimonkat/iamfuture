import { HTMLAttributes } from "react";
import { Icons } from "../icons";
import { cn } from "@/lib/utils";

interface ListWIthIconProps extends HTMLAttributes<HTMLDivElement> {
  list: string[];
  title: string;
  link?: string;
  icon?: React.ReactElement;
}

const ListWIthIcon = ({
  list,
  title,
  link = "/",
  className,
  icon,
  ...props
}: ListWIthIconProps) => {
  return (
    <div className={cn("flex space-x-6", className)} {...props}>
      <div>
        <div className="rounded-full bg-brand-gradient p-[1.5px]">
          <div className="rounded-full bg-blue-primary-900 p-4.5">
            {icon || (
              <Icons.Gradient.CustomerSupport className="h-9 w-9 dark:grayscale" />
            )}
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <div className="text-2xl/7 font-bold tracking-tighter">{title}</div>
        <ul className="space-y-4 text-base/6 font-normal">
          {list.map((list, i) => (
            <li key={i}>{list}</li>
          ))}
        </ul>
        <div className="text-base/6 font-semibold">
          <a target="_blank" href={link}>
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ListWIthIcon;
