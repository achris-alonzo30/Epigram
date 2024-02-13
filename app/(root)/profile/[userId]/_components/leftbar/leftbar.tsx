import { User } from "@prisma/client";
import { Logo } from "@/components/logo";
import { LeftbarRoutes } from "./leftbar-routes";
import { SendFeedback } from "@/components/modals/send-feedback";
import { ButtonRotatingBackgroundGradient } from "@/components/animated-ui/button-rotating-background-gradient";

type LeftbarProps = {
  userId: User["id"];
}

export const Leftbar = ({ userId }: LeftbarProps) => {
  return (
    <aside className="fixed hidden md:flex flex-col w-64 h-full px-4 py-8 overflow-y-auto bg-white border-r dark:bg-zinc-900 dark:border-zinc-700 z-[50]">
      <div className="px-4">
        <Logo />
      </div>
      <div className="flex flex-col justify-between flex-1 mt-8">
        <LeftbarRoutes userId={userId!} />
        <SendFeedback>
          <ButtonRotatingBackgroundGradient isButton>
            Send Feedback
          </ButtonRotatingBackgroundGradient>
        </SendFeedback>
      </div>
    </aside>
  );
};
