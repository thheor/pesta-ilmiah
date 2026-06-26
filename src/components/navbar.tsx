import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LinkButton } from "@/components/linkButton";
import { Logo } from "@/components/logo";
import { Menu } from "lucide-react";
import { LucideMail } from "lucide-react";
import instagram from "@/assets/instagram.svg";
import { useState } from "react";

export function Navbar() {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [isEvents, setIsEvents] = useState<boolean>(false);

  const handleMenuButton = () => {
    setIsMenu(!isMenu);
  };

  return (
    <nav className="fixed px-5 sm:px-10 w-screen min-h-15 flex max-sm:flex-col justify-between sm:items-center bg-white/0 backdrop-blur-sm shadow-md z-100">
      <div className="flex justify-between items-center max-sm:mt-2 max-sm:w-full">
        <Logo className="" />
        <Button onClick={handleMenuButton} className="sm:hidden bg-transparent">
          <Menu className="size-6 text-blue-800/90" />
        </Button>
      </div>
      <NavigationMenu
        className={`${isMenu ? "" : "hidden"} max-sm:ml-6 sm:block font-lexend font-light  text-navy-primary/80`}
      >
        <NavigationMenuList className="max-sm:flex-col max-sm:items-start sm:gap-10">
          <NavigationMenuItem className=" ">
            <NavigationMenuLink className="" asChild>
              <Link to="/about" className="">
                About Us
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="">
            <NavigationMenuTrigger
              onClick={() => setIsEvents(!isEvents)}
              className="bg-transparent"
            >
              Events
            </NavigationMenuTrigger>
            <ul
              className={`${isEvents ? "" : "max-sm:hidden"} relative flex flex-col ml-8 text-xs text-navy-primary/90 sm:hidden`}
            >
              <div className="absolute -left-3 h-full inline-block border-l-2 border-l-primary/60"></div>
              <h3 className="text-lg font-semibold">Competitions</h3>
              <li className="text-lg">
                <Link to="/competition/esai">Esai</Link>
              </li>
              <li className="text-lg">
                <Link to="/competition/infografis">Infografis</Link>
              </li>
              <li className="text-lg">
                <Link to="/competition/cci">CCI</Link>
              </li>
            </ul>
            <NavigationMenuContent className="max-sm:hidden">
              <ul className="w-96">
                <ListItem href="/competition/esai" title="Esai">
                  Lomba poster Re-usable components built with Tailwind CSS.
                </ListItem>
                <ListItem href="/competition/infografis" title="Infografis">
                  Lomba infografis
                </ListItem>
                <ListItem href="/competition/cci" title="CCI">
                  Lomba poster Re-usable components built with Tailwind CSS.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="">
            <NavigationMenuLink asChild>
              <Link to="/faq">FAQ</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/contact">Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex gap-4">
        <Link to="/contact">
          <LucideMail className="w-8 h-8 text-navy-primary" />
        </Link>
        <Link to="instagram.com/srsc_sabayouth">
          <img src={instagram} className="w-8 h-8" />
        </Link>
      </div>
    </nav>
  );
}

function ListItem({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: string;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
