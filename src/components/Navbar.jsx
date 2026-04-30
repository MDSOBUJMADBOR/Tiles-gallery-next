"use client"

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/tiles.png"
import { Button } from "@heroui/react";
import MyNavLink from "./MyNavLink";
import { useState } from "react";
import { Menu, X } from 'lucide-react';

// import { authClient } from "@/lib/auth-client";

const Navbar = () => {
// const userData = authClient.useSession();
// const user = userData.data?.user;
// const handleSignOut = async () => {
// await authClient.signOut();
// }
const toggleMenu = () => {
  setOpen(prev => !prev);
};

const navItems = [
 {
path: "/",
text: "Home"
 },
 {
path: "/all-tiles",
text: "All Tiles"
 },
 {
path: "/profile",
text: "My Profile"
 },

]
const [open,setOpen] = useState(false)


  return (
    <div className="border-b border-gray-200 sticky top-0 bg-black z-50 shadow-xl/3 px-4 ">
      <nav className="flex justify-between items-center  py-3 max-w-7xl mx-auto w-full ">
         
        <div className="flex   gap-4 items-center">
          <Image
            src={logo}
            alt="logo"
            loading="eager"  
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg text-white">Tile Gallery</h3>
        </div>

        <ul className="sm:flex hidden items-center gap-3 text-sm">
{
navItems.map((item,index) => (<MyNavLink key={index} href={item.path}>
<li className="py-1 transition-all duration-200 hover:scale-[1.2]  hover:bg-transparent   w-[70px] text-center text-white">{item.text}</li>
</MyNavLink>
))}

          
        </ul>
{/* small device start */}
    <div onClick={() => setOpen(!open)} className="dropdown dropdown-center sm:hidden ">
  
  <div onClick={toggleMenu} className="sm:hidden cursor-pointer">
  {open ? <X className="text-white" /> : <Menu className="text-white" />}
</div>

  {/* Mobile Menu */}
<ul
  className={` sm:hidden absolute top-12 left-0 w-full bg-[#31537c] shadow-md flex flex-col items-center gap-5 py-4 transition-all duration-300 ${
    open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
  }`}
>
  {navItems.map((item, index) => (
    <li className="w-full px-4 " key={index}>
      <Link
        href={item.path}
        onClick={() => setOpen(false)}
        className="block w-full py-3 text-center rounded-lg transition-all duration-400 ease-in-out text-white hover:bg-[#3cd86b]"
      >
        {item.text}
      </Link>
    </li>
  ))}

  <li className="w-full px-4">
    <Link
      href="/login"
      className="block w-full py-2 text-center rounded-lg transition-all duration-300 ease-in-out hover:bg-[#3cd86b] text-white"
    >
      <Button className="text-lg " variant="light">Login</Button>
    </Link>
  </li>
</ul>
</div>
{/* small device ent */}



        <div className="sm:flex hidden gap-4">
          {/* {!user && 
            <ul className="flex items-center gap-4  text-sm">
            <li>
              <Link href={"/signup"}><Button >SignUp</Button></Link>
            </li>
            <li>
              <Link href={"/signin"}><Button>SignIn</Button></Link>
            </li>
          </ul>}

          {user && (
            <div className="flex gap-3">
              <Avatar size="sm">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button onClick={handleSignOut} size="sm" variant="danger">SignOut</Button>
            </div>
          )} */}

<ul className="flex items-center gap-4  text-sm">
            
            <li>
              <Link href={"/login"}><Button>Login</Button></Link>
            </li>
</ul>


        </div>
      </nav>
    </div>
  );
};

export default Navbar;