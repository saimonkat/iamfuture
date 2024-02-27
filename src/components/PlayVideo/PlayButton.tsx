import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

import { Icons } from "../icons";

interface PlayButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text?: string;
  description?: string;
}

const PlayButton = ({
  text,
  description,
  className,
  ...props
}: PlayButtonProps) => {
  const isDescriptionOrText = text || description;

  return (
    <button
      className={cn(
        "aspect-square w-fit cursor-pointer rounded-full bg-brand-gradient",
        isDescriptionOrText ? "p-2" : "p-1.5",
      )}
      {...props}
    >
      <div
        className={cn(
          "flex h-full w-full flex-col items-center justify-center rounded-full bg-blue-primary-900 p-5 xl:p-10",
          isDescriptionOrText ? "p-5" : "p-10",
        )}
      >
        <div
          className={cn(
            "dark:grayscale",
            isDescriptionOrText
              ? "h-[3.5vh] w-[2.8vh] md:h-[2.875vh] md:w-[2.75vh]"
              : "h-[2.8vh] w-[1.2vh] md:h-[3.5vh] md:w-[2.75vh]",
          )}
        >
          <Icons.Play />
        </div>
        {text && (
          <p className="mt-3 max-w-[10vh] text-center text-base font-semibold">
            {text}
          </p>
        )}
        {description && (
          <div className="mt-1.5 text-center text-sm opacity-50">
            {description}
          </div>
        )}
      </div>
    </button>
  );
};

export default PlayButton;
