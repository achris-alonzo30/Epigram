import Image from "next/image";
import { TextGradient } from "./animated-ui/text-gradient";

type LogoProps = {
  isText?: boolean;
}

export const Logo = ({ isText }: LogoProps ) => {
  return (
    <div className="flex gap-x-2 items-center">
      <Image src="/logo.svg" alt="logo" width={40} height={40} />
      {isText && (
        <TextGradient isHeading fontSize={["text-2xl"]} fontStyle="font-extrabold">
          Epigram
        </TextGradient>
      )}
    </div>
  );
};
