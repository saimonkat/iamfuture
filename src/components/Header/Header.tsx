"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { ThemeSwitch } from "@/UI/Switch";
import { Container } from "../Container";
import { HeaderContext } from "@/app/Context";
import { Icons } from "../icons";
import { SheetTrigger } from "@/UI/sheet";

const Header = () => {
  const { activeHeader, headerRef } = React.useContext(HeaderContext);
  const { setTheme, theme } = useTheme();
  const [isLightTheme, setIsLightTheme] = useState(true);

  const onSwitchChange = (value: boolean) => {
    if (value) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    if (theme) setIsLightTheme(theme === "light");
  }, [theme]);

  return (
    <div
      className={`visible fixed top-0 z-20 h-auto w-screen bg-gradient-to-b from-blue-primary-900 to-transparent xl:left-22 xl:w-[calc(100vw-4.8vw)] ${
        activeHeader ? "" : "-translate-y-40 transition-transform duration-500"
      }`}
      ref={headerRef}
    >
      <Container className="flex w-full items-center justify-between p-7.5 lg:p-12.5 xl:py-14">
        <div className="flex items-center space-x-3 xl:space-x-5">
          <div className="relative h-[5vh] w-[4.9vh] md:h-[7.75vh] md:w-[7.5vh] xl:h-[6.8vh] xl:w-[6.6vh]">
            <Image src="/images/Logo.png" fill alt="logo" sizes="6.6vh" />
          </div>
          <div className="h-5 w-[13.737vh] md:h-[3.1vh] md:w-[21.12vh] xl:h-[2.8vh] xl:w-[18.5vh]">
            <Icons.LogoName />
          </div>
        </div>
        <div className="flex items-center md:space-x-10">
          <ThemeSwitch
            checked={isLightTheme}
            onCheckedChange={onSwitchChange}
            containerClassName="hidden md:block"
          />
          {/* INFO: temporary commented */}
          {/* <Button variant="outline" className="font-bold">
            Launch App
          </Button> */}
          <SheetTrigger className="xl:hidden">
            <div className="h-[2.6vh] w-[3.5vh] md:h-[3.125vh] md:w-[4.5vh]">
              <Icons.MenuFries width="100%" height="100%" />
            </div>
          </SheetTrigger>
        </div>
      </Container>
    </div>
  );
};

export default Header;
