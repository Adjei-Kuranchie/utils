import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GearIcon, LightningBoltIcon, PersonIcon } from "@radix-ui/react-icons";

import Link from "next/link";
import { PerfectScrollbar } from "perfect-scrollbar";
import AnimatedCursor from "react-animated-cursor";
import Breadcrumbs from "./Breadcrumb";
import { accentColor, ModeToggle } from "./toggleTheme";

export const NavIcon = ({ tooltip, side, offset, children }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:bg-zinc-950 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950 hover:duration-300 hover:ease-linear focus:bg-white">
            {children}
          </div>
        </TooltipTrigger>
        <TooltipContent side={side} sideOffset={offset}>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const Navbar = ({ children }) => {
  const links = [
    {
      name: "About",
      url: "/about",
      icon: <PersonIcon className={`w-6 h-6`} />,
    },
    {
      name: "Services",
      url: "/services",
      icon: <GearIcon className={`w-6 h-6`} />,
    },
    {
      name: "Contact",
      url: "/contact",
      icon: <LightningBoltIcon className={`w-6 h-6`} />,
    },
  ];

  const Aside = () => {
    return (
      <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative dark:bg-zinc-950 dark:text-white ">
        {links.map((link, index) => (
          <NavIcon key={index} tooltip={link.name} side={`right`} offset={5}>
            <Link href={link.url}>{link.icon}</Link>
          </NavIcon>
        ))}
      </aside>
    );
  };

  const Header = () => {
    return (
      <header className="h-16 w-full flex items-center justify-between">
        <div className=" w-full px-5 space-x-10 dark:bg-zinc-950 ">
          <Breadcrumbs />
        </div>
        <div className={`px-5 space-x-10 `}>
          <ModeToggle />
        </div>
      </header>
    );
  };

  return (
    <nav className="h-screen w-full relative bg-white dark:bg-zinc-950 overflow-hidden flex">
      <AnimatedCursor color={accentColor} />

      <Aside />

      <div className={`w-full h-full flex flex-col justify-between`}>
        <Header />

        <main className="max-w-full h-full flex relative overflow-y-hidden">
          <div className="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll px-9 pt-4 relative">
            <PerfectScrollbar>{children}</PerfectScrollbar>
          </div>
        </main>
      </div>
    </nav>
  );
};
export default Navbar;
