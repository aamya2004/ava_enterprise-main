import Image from "next/image";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { MdOutlineAssistant } from "react-icons/md";
import { IoDocuments } from "react-icons/io5";
import {
  Settings,
  LayoutDashboard,
  MessagesSquare,
} from "lucide-react";

const SideNav = () => {
  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-24 lg:w-16 2xl:w-16 xl:w-16 flex-col items-center bg-indigo-950 sm:flex gap-10">
        <Image
          src="/Login/logo.png"
          width={56}
          height={39}
          className="pt-8"
        ></Image>
        <nav className="flex flex-col items-center gap-10 px-2 sm:py-5 ">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboard"
                  className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full  text-lg font-semibold text-muted-foreground md:h-8 md:w-8 md:text-base"
                >
                  <LayoutDashboard className="h-10 w-10 lg:w-6 lg:h-6 transition-all group-hover:scale-110 group-hover:text-white" />
                  <span className="sr-only">Dashboard</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Dashboard</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboard/chat"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors  md:h-8 md:w-8"
                >
                  <MessagesSquare className="h-10 w-10 lg:w-6 lg:h-6  transition-all hover:scale-110 hover:text-white" />
                  <span className="sr-only">Chat</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Chat</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboard/assistants"
                  className="flex h-10 w-10 items-center justify-center rounded-lg  text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <MdOutlineAssistant className="h-10 w-10 lg:w-6 lg:h-6  transition-all hover:scale-110 hover:text-white" />
                  <span className="sr-only">Assistants</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Assistants</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboard/knowledgeStore"
                  className="flex h-10 w-10 items-center justify-center rounded-lg  text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <IoDocuments className="h-10 w-10 lg:w-6 lg:h-6  transition-all hover:scale-110 hover:text-white" />
                  <span className="sr-only">Knowledge Store</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Knowledge Store</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboard/settings"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Settings className="h-10 w-10 lg:w-6 lg:h-6 transition-all hover:scale-110 hover:text-white" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                 <Image src="/Chat/Ira.jpg" width={60} height={0} className="rounded-full w-20"></Image>

                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

    </>
  );
};

export default SideNav;
