import { Container } from "@/components/Container";
import { Finance } from "./Finance";
import { Chain } from "./Chain";

interface PredictionsMobileProps {
  className?: string;
}

const PredictionsMobile = ({ className }: PredictionsMobileProps) => {
  return (
    <div className={className}>
      <Finance />
      <Container className="mt-31.25">
        <Chain sectionRef={null} />
      </Container>
    </div>
  );
};

export default PredictionsMobile;
