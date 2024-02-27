import { Container } from "@/components/Container";
import { RefObject } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

interface ProgressBarHeaderProps {
  headerTitle: string;
  headerHeight: number;
  progressBarRef: RefObject<HTMLDivElement>;
  progressBarHeaderRef: RefObject<HTMLDivElement>;
}

const ProgressBarHeader = ({
  headerHeight,
  headerTitle,
  progressBarRef,
  progressBarHeaderRef,
}: ProgressBarHeaderProps) => {
  return (
    <div
      // INFO: -2px to guarantee no gap
      style={{ top: headerHeight - 2 }}
      className="sticky left-0 z-10 w-full overflow-x-hidden bg-blue-primary-900 xl:hidden"
      ref={progressBarHeaderRef}
    >
      <Container className="py-8 md:py-9">
        <SwitchTransition>
          <CSSTransition
            key={headerTitle}
            timeout={600}
            classNames={{
              enterActive: "animate-in fade-in duration-300",
              exitActive: "animate-out delay-300 fade-out duration-300",
            }}
            mountOnEnter
            unmountOnExit
          >
            <h2 className="w-fit bg-brand-gradient bg-clip-text xl:text-4xl text-3xl font-semibold text-transparent md:text-4.8xl">
              {headerTitle}
            </h2>
          </CSSTransition>
        </SwitchTransition>
      </Container>
      <div className="w-full bg-blue-primary-600">
        <div
          ref={progressBarRef}
          className="h-[0.75vh] w-full -translate-x-full bg-brand-gradient transition-transform"
        />
      </div>
    </div>
  );
};

export default ProgressBarHeader;
