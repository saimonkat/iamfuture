import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren {
  className?: string;
  id?: string;
}

const Container = ({ children, className, id }: ContainerProps) => {
  return (
    <div
      id={id}
      className={cn("mx-auto max-w-7xl px-6 md:px-12.5 xl:px-18", className)}
    >
      {children}
    </div>
  );
};

export default Container;
