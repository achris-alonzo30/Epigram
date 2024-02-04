import Link from "next/link";

type ButtonRotatingBackgroundGradientProps = {
  route: string;
  children: React.ReactNode;
}

export const ButtonRotatingBackgroundGradient = ({children, route}: ButtonRotatingBackgroundGradientProps) => {

  return (
    <Link href={route} className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transform hover:-translate-y-1 transition duration-400" >
      <span className="absolute inset-[-1000%] animate-[spin_10s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFA0A0_0%,#7600FF_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-slate-950 px-4 py-2 text-sm font-medium text-slate-950 dark:text-white backdrop-blur-3xl">
        {children}
      </span>
    </Link>
  );
};
