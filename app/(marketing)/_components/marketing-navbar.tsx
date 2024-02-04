import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { SignInButton, UserButton, auth} from "@clerk/nextjs";

export const MarketingHeader = () => {
  const { userId } = auth();

  return (
    <header className="relative shadow-sm overflow-hidden border-b border-white/5 py-6 px-4">
      <div className="relative flex justify-between w-full mx-auto max-w-7xl">
        <div className="flex flex-row items-center justify-between text-sm text-white lg:justify-start">
          <Logo />
        </div>
        <nav className="items-center flex-grow flex flex-row justify-end md:pb-0">
          <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
            <ThemeToggle />
            {!userId ? (
            <SignInButton mode="modal">
              <Button
                className="items-center inline-flex focus:outline-none justify-center text-white bg-[#7600FF] duration-200 focus-visible:outline-black focus-visible:ring-black font-medium hover:bg-[#7600FF]/70 hover:border-white hover:text-white lg:w-auto px-6 py-3 rounded-full text-center w-full transform hover:-translate-y-1 transition duration-400"
              >
                Sign In
              </Button>
            </SignInButton>
            ): (
              <UserButton afterSignOutUrl="/" />
            ) }
            
          </div>
        </nav>
      </div>
    </header>
  );
};
