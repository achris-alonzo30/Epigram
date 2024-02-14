import { Heros } from "./_components/marketing-heros";
import { Navbar } from "./_components/marketing-navbar";
import { Footer } from "./_components/marketing-footer";
import { HeroImage } from "./_components/marketing-image";
import { CallToAction } from "./_components/marketing-cta";
import { Features } from "./_components/marketing-features";

const MarketingPage = () => {
  // TODO: Make this responsive
  return (
    <div className="dark:bg-gradient-to-t from-[#030303] to-[#363636]">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <Heros />
        <HeroImage />
        <Features />
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
};

export default MarketingPage;
