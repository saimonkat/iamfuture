import { cn } from "@/lib/utils";
import { Percents } from "./const";

interface PercentProps {
  className?: string;
}

const Percent = ({ className }: PercentProps) => {
  return (
    <ul className={cn("flex space-x-30 md:space-x-0 xl:space-x-30 md:justify-around md:w-[2040px] xl:w-fit", className)}>
      {Percents.map((percent, index) => (
        <li
          className="relative flex h-52 w-52 flex-shrink-0 flex-col items-center px-3 py-14"
          key={index}
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-52 w-52 flex-shrink-0 dark:grayscale">
            {percent.icon}
          </div>
          <p className="mb-1 w-fit bg-brand-gradient bg-clip-text text-4.4xl font-bold leading-[140%] text-transparent ">
            {percent.percent}%
          </p>
          <span className="text-center font-normal">{percent.description}</span>
        </li>
      ))}
    </ul>
  );
};

export default Percent;
