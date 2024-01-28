

import { MarketingHeader } from "./_components/marketing-navbar";
import { MarketingHeros } from "./_components/marketing-heros";
import { MarketingImage } from "./_components/marketing-image";
import { MarketingFeatures } from "./_components/marketing-features";
import { MarketingCTA } from "./_components/marketing-cta";
import { MarketingFooter } from "./_components/marketing-footer";


const MarketingPage = () => {
  // TODO: Check if user is logged in then redirect them
  return (
    <section className="dark:bg-gradient-to-t from-[#030303] to-[#363636]">
      <MarketingHeader />
      <div className="flex flex-col items-center justify-center">
        <MarketingHeros />

        <MarketingImage />

        <MarketingFeatures />
      </div>

      <MarketingCTA />

      <MarketingFooter />
    </section>
  );
};

export default MarketingPage;
