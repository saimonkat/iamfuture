import { Icons } from "@/components/icons";
import { Switch } from "./";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface IThemeSwitchProps extends ComponentProps<typeof Switch> {
  containerClassName?: string;
}

const ThemeSwitch = ({ containerClassName, ...props }: IThemeSwitchProps) => {
  return (
    <div className={cn("relative w-fit", containerClassName)}>
      <div className="w-h-5 pointer-events-none absolute left-3 top-[50%] h-5 w-5 -translate-y-1/2 text-blue-primary-900 xl:top-[45%] xl:h-4 xl:w-4">
        <Icons.Sparkling />
      </div>
      <div className="w-h-5 pointer-events-none absolute right-3 top-[50%] h-5 w-5 -translate-y-1/2 text-classic-900 xl:top-[45%] xl:h-4 xl:w-4">
        <Icons.Sun />
      </div>
      <Switch
        defaultChecked
        className="h-[3.5vh] w-[8.25vh] border-0 p-[3px] data-[state=checked]:bg-brand-gradient data-[state=unchecked]:bg-brand-gradient xl:h-7 xl:w-16.5 xl:p-[2px]"
        {...props}
      />
    </div>
  );
};

export default ThemeSwitch;
