import { FeatureLinks } from "@/lib/map-links";

export const MarketingFeatures = () => {
  return (
    <div className="container px-6 py-10 mx-auto">
      <h1 className="text-2xl font-semibold text-center text-slate-800 capitalize lg:text-3xl dark:text-white">
        What Awaits You?
      </h1>
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
        {FeatureLinks.map((feature) => (
          <div
            className="flex flex-col items-center p-6 space-y-3 text-center rounded-xl bg-gray-100 dark:bg-gray-800 transition-transform hover:-translate-x-2 hover:-translate-y-2"
            key={feature.title}
          >
            <feature.icon className="w-6 h-6 text-[#7600FF]" />
            <h1 className="text-xl font-semibold text-slate-700 capitalize dark:text-slate-100">
              {feature.title}
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
