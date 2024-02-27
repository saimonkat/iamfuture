"use client";
import React, { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { Icons } from "../icons";
import { SMediaContacts, sidebarNavs } from "./const";
import { Header } from "../Header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/UI/sheet";
import Link from "next/link";
import { useMediaQuery } from "@/hooks";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const calculateScrollPosition = (tween: gsap.core.Animation, panels: (HTMLDivElement | HTMLLIElement)[], elem: HTMLLIElement | HTMLDivElement) => {
  if (tween && tween.scrollTrigger) {
    let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start;

    let totalMovement = panels.reduce((acc, panel) => acc + panel.offsetWidth, 0) - elem.scrollWidth;

    if (totalScroll) {
      return Math.round(tween.scrollTrigger.start + (elem.offsetLeft / totalMovement) * totalScroll);
    }
  }
  return 0;
};

const Sidebar: React.FC = () => {
  const anchorsRef = useRef<HTMLDivElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [targetElem, setTargetElem] = useState<HTMLLIElement | HTMLDivElement | null>(null);

  const onSidebarOpen = useCallback(() => setIsModalOpen(!isModalOpen), [isModalOpen]);

  const isDesktop = useMediaQuery("(min-width: 1280px)");

  const handleClickAnchor = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (isModalOpen) {
        let target = e.target as HTMLAnchorElement;
        let targetElement = document.querySelector(target.getAttribute("href") as string) as HTMLLIElement | HTMLDivElement;
        setTargetElem(targetElement);
        onSidebarOpen();
      }
    },
    [isModalOpen, onSidebarOpen],
  );

  useEffect(() => {
    if (!targetElem) return;
    const blockArr = sidebarNavs.filter(block => !!block.id && block.groups.some(item => item.id && item.hash)).map(block => ({
      panels: gsap.utils.toArray<HTMLDivElement | HTMLLIElement>(block.groups.map(item => document.getElementById(block.id)?.querySelector(`#${item.id}`))),
      tween: gsap.getById(block.idTween),
    }));

    if (isDesktop) {
      for (const block of blockArr) {
        if (!block.panels.includes(targetElem)) {
          gsap.to(window, {
            scrollTo: {
              y: calculateScrollPosition(block.tween, block.panels, block.panels[block.panels.length - 1]),
              autoKill: false,

            },
            duration: 1,
          });
        } else {
          gsap.to(window, {
            scrollTo: {
              y: calculateScrollPosition(block.tween, block.panels, targetElem),
              autoKill: false,
            },
            duration: 1,
          });
          break; // Выход из цикла
        }
      }
    } else {
      const parentElement = targetElem.parentElement;
      if (parentElement) {
        targetElem.scrollIntoView({ behavior: "smooth" });

      }
    }

    setTargetElem(null);
  }, [targetElem]);


  const onScrollToSection = (hash: string) => {
    const section = document.getElementById(hash);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      onSidebarOpen();
    }
  };

  return (
    <Sheet onOpenChange={onSidebarOpen} open={isModalOpen}>
      <Header />
      <div
        className="fixed left-0 top-0 z-50 hidden h-full w-22 flex-col items-center justify-between border-r border-blue-primary-600 bg-blue-primary-900 py-8 xl:flex">
        <SheetTrigger>
          <div className="cursor-pointer space-y-4 p-4 text-white">
            <div className="h-[2.5vh] w-[3.7vh]">
              <Icons.MenuFries width="100%" height="100%" />
            </div>
            <div className="text-xs font-light uppercase tracking-tight">
              MENU
            </div>
          </div>
        </SheetTrigger>
        <div className="space-y-4">
          {SMediaContacts.map(({ link, icon, name }) => (
            <div key={name}>
              <a href={link} rel="noreferrer" target="_blank">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-primary-600 p-2 text-blue-primary-300">
                  {icon}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <SheetContent
        side="left"
        className="flex flex-col justify-between overflow-y-auto p-0"
        ref={anchorsRef}
      >
        <SheetHeader className="space-y-6 px-8 pb-6.5 pt-10 xl:pt-24">
          {sidebarNavs.map(({ title, groups }) => (
            <Fragment key={title}>
              <SheetTitle className="text-left">{title}</SheetTitle>
              {groups?.length && (
                <SheetDescription className="mt-3 space-y-2 text-left">
                  {groups.map((nav) => {
                    if (nav?.link)
                      return (
                        <Link
                          href={nav.link}
                          rel="noreferrer"
                          target={nav.target}
                          key={nav.title}
                          className="block"
                        >
                          {nav.title}
                        </Link>
                      );

                    if (nav.hash && nav.id) {
                      return <Link
                        key={nav.title}
                        onClick={(handleClickAnchor)}
                        className="block hover:underline"
                        href={`#${nav.hash}`}
                      >
                        {nav.title}
                      </Link>;
                    }


                    return <p
                      key={nav.title}
                      onClick={() => onScrollToSection(nav.hash)}
                      className="block hover:underline cursor-pointer"
                    >
                      {nav.title}
                    </p>;

                  })}
                </SheetDescription>
              )}
            </Fragment>
          ))}
        </SheetHeader>
        <SheetFooter className="px-8 py-6">
          <div className="space-y-4">
            {SMediaContacts.map(({ link, icon, name, value }) => (
              <a
                href={link}
                rel="noreferrer"
                target="_blank"
                className="flex items-center space-x-3"
                key={name}
              >
                <div
                  className="rounded-full bg-[rgba(168,171,203,0.20)] p-2 text-white dark:bg-[rgba(140,143,149,0.20)]">
                  {icon}
                </div>
                <div className="text-base font-semibold leading-6 text-blue-primary-300">
                  <span className="capitalize">{name}</span>
                  {value && (
                    <>
                      : <span className="font-normal">{value}</span>
                    </>
                  )}
                </div>
              </a>
            ))}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
