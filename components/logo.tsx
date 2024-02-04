import Image from "next/image";
import { TextGradient } from "./animated-ui/text-gradient";

export const Logo = () => {
  return (
    <div className="flex gap-x-2 items-center">
      <Image src="/logo.svg" alt="logo" width={40} height={40} />
      <TextGradient isHeading fontSize={["text-2xl"]} fontStyle="font-extrabold">
        Epigram
      </TextGradient>
    </div>
  );
};
