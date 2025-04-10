
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect} from "next/navigation";

import { getCurrentUser, isAuthenticated} from "@/lib/actions/auth.actions";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");
  
  
  
  const user = await getCurrentUser(); // awaited if Promise
    const firsletter = user?.name[0];
  return (
    <div className="root-layout">
      <nav className="flex justify-between items-center p-4 shadow-md">
        {/* Left Side: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-primary-100 text-4xl font-semibold">Interviewmate</h2>
        </Link>

        {/* Right Side: Profile Button */}
        <div className="relative">
          {/* Hidden Checkbox */}
          <input id="profile-menu-toggle" type="checkbox" className="hidden peer" />

          <DropdownMenu>
  <DropdownMenuTrigger><label
            htmlFor="profile-menu-toggle"
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-100 flex items-center justify-center  cursor-pointer"
          >
            <p className="text-xl font-bold text-white">{firsletter?.toUpperCase()}</p>
          </label></DropdownMenuTrigger>
  <DropdownMenuContent>
    
    
    <DropdownMenuItem><Link
    href="/logout"
    className="flex items-center gap-2 p-2  rounded-md transition-colors w-full text-left"
  >
    <div className="relative w-5 h-5 text-amber-50 bg-transparent">
      <Image src="/logout.svg" alt="Logout" fill />
    </div>
    <span className="">Sign out</span>
  </Link></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

          {/* Dropdown Menu */}
         


    
        </div>
      </nav>

      {/* Page Content */}
      {children}
    </div>
  );
};

export default Layout;
