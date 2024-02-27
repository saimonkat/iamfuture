"use client";
import Benefits2 from "./Benefits2";
import Benefits1 from "./Benefits1";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useEffect, useRef, useState } from "react";
import StaticContent from "./StaticContent";

const Wallet = () => {
  const [state, setState] = useState<boolean>(false);
  const [hasMounted, setHasMounted] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  const changeState = () => setState(!state);

  useEffect(() => {
    changeState();
    setHasMounted(true);
  }, []);

  return (
    <div className="wallet max-w-[80vh] space-y-8">
      <StaticContent />
      {/* INFO: Benefits1 and Benefits2 should display one by one */}
      <SwitchTransition>
        <CSSTransition
          timeout={hasMounted ? 6000 : 0}
          nodeRef={nodeRef}
          addEndListener={(done) =>
            nodeRef?.current?.addEventListener("transitionend", done, false)
          }
          classNames={{
            enterActive: "opacity-0 delay-500 duration-500",
            enter: "opacity-100 delay-1000 duartion-500",
            exitActive: `opacity-0 duration-500`,
          }}
          mountOnEnter
          unmountOnExit
          onExited={changeState}
        >
          <div ref={nodeRef} className="grid grid-cols-2 justify-between gap-6">
            {state ? <Benefits2 /> : <Benefits1 />}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default Wallet;
