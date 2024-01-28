import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex gap-x-2 items-center">
      <Image src="/logo.svg" alt="logo" width={40} height={40} />
      <h1 className="inline-flex animate-text-gradient bg-gradient-to-r from-[#FFA0A0] via-[#7600FF] to-[#c7d2fe] bg-[240%_auto] bg-clip-text text-2xl font-semibold text-transparent">
        iHealth
      </h1>
    </div>
  );
};
