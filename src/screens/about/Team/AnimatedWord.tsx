"use client";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useEffect, useState } from "react";

const names = [
  "uture",
  "reedom",
  "orecasting",
  "oresight",
  "earless",
  "lexibility",
];

const AnimatedWord = () => {
  const [nameLetter, setNameLetter] = useState(0);
  const changeIndex = () => {
    if (nameLetter >= names.length - 1) {
      setNameLetter(0);
    } else {
      setNameLetter((prev) => prev + 1);
    }
  };

  useEffect(() => {
    // INFO: for triggering CSSTransition's onExited
    changeIndex();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex">
      <span className="text-cyan-50">F</span>
      <SwitchTransition>
        <CSSTransition
          timeout={1200}
          classNames={{
            enterActive:
              "animate-in fade-in duration-700 slide-in-from-bottom-1/2 xl:slide-in-from-bottom-full",
            // exit: "opacity-100",  // this breaks the exit transition
            exitActive:
              "animate-out delay-500 fade-out duration-700 slide-out-to-top-1/2 xl:slide-out-to-top-full",
          }}
          mountOnEnter
          unmountOnExit
          onExited={changeIndex}
        >
          <div>{names[nameLetter]}</div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default AnimatedWord;
