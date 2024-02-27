import { Documentation } from "@/screens/Documentation";
import { Home as HomeScreen } from "@/screens/home";
import { About, AboutMobile } from "@/screens/about";
import { Predictions, PredictionsMobile } from "@/screens/predictions";
import { Features, FeaturesMobile } from "@/screens/features";
import { ScreenDisplay } from "@/components/ScreenDisplay";

export default function Home() {
  return (
    <main>
      <HomeScreen />
      <ScreenDisplay desktop={<Features />} mobile={<FeaturesMobile />} />
      <ScreenDisplay desktop={<Predictions />} mobile={<PredictionsMobile />} />
      <Documentation />
      <ScreenDisplay desktop={<About />} mobile={<AboutMobile />} />
    </main>
  );
}
