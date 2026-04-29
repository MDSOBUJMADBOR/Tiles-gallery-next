
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images.png"
import { Button } from "@heroui/react";
import MyNavLink from "./MyNavLink";

// import { authClient } from "@/lib/auth-client";

const Navbar = () => {
// const userData = authClient.useSession();
// const user = userData.data?.user;
// const handleSignOut = async () => {
// await authClient.signOut();
// }

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


  return (
    <div className=" border-b px-2">
      <nav className="flex justify-between items-center  py-3 max-w-7xl mx-auto w-full ">
         
        <div className="flex gap-2 items-center">
          <Image
            src={logo}
            alt="logo"
            loading="eager"  
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">Tile Gallery</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
        {
navItems.map((item,index) => (<MyNavLink key={index} href={item.path}>
<li className="py-1">{item.text}</li>
</MyNavLink>
))}

          
        </ul>

        <div className="flex gap-4">
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