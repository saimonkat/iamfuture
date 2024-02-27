import { cn } from "@/lib/utils";
import { HTMLAttributes, PropsWithChildren } from "react";

const Tag = ({
  className,
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div
      className={cn(
        "break-normal rounded-full bg-blue-primary-900 px-6 py-3",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Tag;
