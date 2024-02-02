import { auth, useUser } from "@clerk/nextjs";

import { MarketingCTA } from "./_components/marketing-cta";
import { MarketingHeros } from "./_components/marketing-heros";
import { MarketingImage } from "./_components/marketing-image";
import { MarketingHeader } from "./_components/marketing-navbar";
import { MarketingFooter } from "./_components/marketing-footer";
import { MarketingFeatures } from "./_components/marketing-features";

const MarketingPage = () => {
  // TODO: Make this responsive
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
