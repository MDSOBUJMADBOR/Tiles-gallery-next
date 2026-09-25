
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Avatar, Button } from "@heroui/react";
import {
  Menu,
  X,
  LogIn,
  LogOut,
  User,
  UserPlus,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../../public/tiles.png";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);

  const dropdownRef = useRef(null);

  const userData = authClient.useSession();
  const user = userData.data?.user;

  // =========================================================
  // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  // =========================================================

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setUserDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // =========================================================
  // SIGN OUT
  // =========================================================

  const handleSignOut = async () => {
    try {
      await authClient.signOut();

      setUserDropdown(false);
      setOpen(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // =========================================================
  // CLOSE MOBILE MENU
  // =========================================================

  const handleMobileLink = () => {
    setOpen(false);
    setUserDropdown(false);
  };

  // =========================================================
  // NAVIGATION ITEMS
  // =========================================================

  const navItems = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/all-tiles",
      text: "All Tiles",
    },
    {
      path: "/contact",
      text: "Contact Us",
    },
    {
      path: "/about",
      text: "About Us",
    },

    // My Profile only appears when user is logged in
    ...(user
      ? [
          {
            path: "/profile",
            text: "My Profile",
          },
        ]
      : []),
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <nav className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            className="group flex shrink-0 items-center gap-3"
          >
            <motion.div
              whileHover={{
                rotate: 5,
                scale: 1.08,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 15,
              }}
              className="relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-xl bg-[#1158ff]/40 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/10 shadow-lg">
                <Image
                  src={logo}
                  alt="Tile Gallery Logo"
                  width={34}
                  height={34}
                  priority
                  className="h-8 w-8 object-contain"
                />
              </div>
            </motion.div>

            <div className="">
              <h1 className="text-lg font-extrabold tracking-tight text-white">
                Tile
                <span className="text-[#1158ff]"> Gallery</span>
              </h1>

              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
                Premium Tiles
              </p>
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div className="hidden items-center sm:flex">
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur-md">
              {navItems.map((item) => {
                const isActive = pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="relative"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-full bg-white/10"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}

                    <motion.div
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.96 }}
                      className={`relative z-10 rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-white"
                          : "text-white/55 hover:text-white"
                      }`}
                    >
                      {item.text}
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* =================================================
              DESKTOP RIGHT SIDE
          ================================================= */}

          <div className="hidden items-center sm:flex">
            {!user ? (
              /* ===============================================
                 NOT LOGGED IN
              =============================================== */

              <div className="flex items-center gap-2">
                {/* Register */}
                <Link href="/register">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Button
                      variant="flat"
                      className="
                        h-9
                        rounded-lg
                        border
                        border-white/10
                        bg-white/[0.06]
                        px-4
                        font-semibold
                        text-white
                        hover:bg-white/10
                      "
                      startContent={<UserPlus size={16} />}
                    >
                      Register
                    </Button>
                  </motion.div>
                </Link>

                {/* Login */}
                <Link href="/login">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Button
                      className="
                        h-9
                        rounded-lg
                        bg-[#1158ff]
                        px-5
                        font-semibold
                        text-white
                        shadow-lg
                        shadow-[#1158ff]/20
                        hover:bg-[#1158ff]
                      "
                      startContent={<LogIn size={16} />}
                    >
                      Login
                    </Button>
                  </motion.div>
                </Link>
              </div>
            ) : (
              /* ===============================================
                 LOGGED IN
              =============================================== */

              <div ref={dropdownRef} className="relative">
                {/* User Button */}

                <motion.button
                  type="button"
                  onClick={() =>
                    setUserDropdown((prev) => !prev)
                  }
                  whileTap={{ scale: 0.97 }}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.05]
                    px-2
                    py-1.5
                    transition-all
                    duration-300
                    hover:border-white/20
                    hover:bg-white/10
                  "
                >
                  <Avatar size="sm">
                    <Avatar.Image
                      alt={user?.name || "User"}
                      src={user?.image || undefined}
                      referrerPolicy="no-referrer"
                    />

                    <Avatar.Fallback>
                      {user?.name
                        ?.charAt(0)
                        ?.toUpperCase() || "U"}
                    </Avatar.Fallback>
                  </Avatar>

                  <div className="hidden max-w-[100px] text-left md:block">
                    <p className="truncate text-xs font-semibold text-white">
                      {user?.name || "User"}
                    </p>

                    <p className="text-[10px] text-white/40">
                      Member
                    </p>
                  </div>

                  <motion.div
                    animate={{
                      rotate: userDropdown ? 180 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown
                      size={16}
                      className="text-white/50"
                    />
                  </motion.div>
                </motion.button>

                {/* =================================================
                    DESKTOP USER DROPDOWN
                ================================================= */}

                <AnimatePresence>
                  {userDropdown && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -8,
                        scale: 0.96,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: -8,
                        scale: 0.96,
                      }}
                      transition={{
                        duration: 0.18,
                        ease: "easeOut",
                      }}
                      className="
                        absolute
                        right-0
                        top-[calc(100%+10px)]
                        w-60
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/10
                        bg-[#0b0b0b]/95
                        p-2
                        shadow-2xl
                        shadow-black/40
                        backdrop-blur-2xl
                      "
                    >
                      {/* User Info */}

                      <div className="mb-2 rounded-xl bg-white/[0.05] p-3">
                        <div className="flex items-center gap-3">
                          <Avatar size="md">
                            <Avatar.Image
                              alt={user?.name || "User"}
                              src={user?.image || undefined}
                              referrerPolicy="no-referrer"
                            />

                            <Avatar.Fallback>
                              {user?.name
                                ?.charAt(0)
                                ?.toUpperCase() || "U"}
                            </Avatar.Fallback>
                          </Avatar>

                          <div className="min-w-0">
                            <p className="truncate text-sm font-semibold text-white">
                              {user?.name || "User"}
                            </p>

                            <p className="truncate text-xs text-white/40">
                              {user?.email || "Member"}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* My Profile */}

                      <Link
                        href="/profile"
                        onClick={() => setUserDropdown(false)}
                        className="
                          flex
                          items-center
                          gap-3
                          rounded-xl
                          px-3
                          py-2.5
                          text-sm
                          font-medium
                          text-white/70
                          transition-all
                          duration-200
                          hover:bg-[#1158ff]/10
                          hover:text-white
                        "
                      >
                        <User size={17} />

                        <span>My Profile</span>
                      </Link>

                      {/* Divider */}

                      <div className="my-2 h-px bg-white/10" />

                      {/* Sign Out */}

                      <button
                        type="button"
                        onClick={handleSignOut}
                        className="
                          flex
                          w-full
                          items-center
                          gap-3
                          rounded-xl
                          px-3
                          py-2.5
                          text-sm
                          font-medium
                          text-red-400
                          transition-all
                          duration-200
                          hover:bg-red-500/10
                          hover:text-red-300
                        "
                      >
                        <LogOut size={17} />

                        <span>Sign Out</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <motion.button
            type="button"
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen((prev) => !prev)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/[0.05]
              text-white
              transition-colors
              hover:bg-white/10
              sm:hidden
            "
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.div
                  key="close"
                  initial={{
                    rotate: -90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: 90,
                    opacity: 0,
                  }}
                >
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{
                    rotate: 90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: -90,
                    opacity: 0,
                  }}
                >
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="
                fixed
                inset-0
                top-[72px]
                z-40
                bg-black/60
                backdrop-blur-sm
                sm:hidden
              "
            />

            {/* Mobile Panel */}

            <motion.div
              initial={{
                opacity: 0,
                y: -15,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -15,
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                absolute
                left-0
                right-0
                top-[72px]
                z-50
                border-b
                border-white/10
                bg-[#080808]/95
                px-4
                pb-5
                pt-3
                shadow-2xl
                backdrop-blur-2xl
                sm:hidden
              "
            >
              <div className="mx-auto max-w-lg">
                {/* Navigation */}

                <div className="space-y-1">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.path;

                    return (
                      <motion.div
                        key={item.path}
                        initial={{
                          opacity: 0,
                          x: -15,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.05,
                        }}
                      >
                        <Link
                          href={item.path}
                          onClick={handleMobileLink}
                          className={`
                            flex
                            items-center
                            justify-between
                            rounded-xl
                            px-4
                            py-3.5
                            text-sm
                            font-medium
                            transition-all
                            duration-200
                            ${
                              isActive
                                ? "bg-[#1158ff]/10 text-[#1158ff]"
                                : "text-white/70 hover:bg-white/5 hover:text-white"
                            }
                          `}
                        >
                          <span>{item.text}</span>

                          {isActive && (
                            <span className="h-2 w-2 rounded-full bg-[#1158ff] shadow-lg shadow-[#1158ff]/50" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Divider */}

                <div className="my-4 h-px bg-white/10" />

                {/* =================================================
                    MOBILE AUTH
                ================================================= */}

                {!user ? (
                  /* LOGIN + REGISTER */
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.15,
                    }}
                    className="grid grid-cols-2 gap-2"
                  >
                    {/* Register */}

                    <Link
                      href="/register"
                      onClick={() => setOpen(false)}
                    >
                      <Button
                        fullWidth
                        className="
                          h-11
                          rounded-xl
                          border
                          border-white/10
                          bg-white/[0.06]
                          font-semibold
                          text-white
                        "
                        startContent={<UserPlus size={17} />}
                      >
                        Register
                      </Button>
                    </Link>

                    {/* Login */}

                    <Link
                      href="/login"
                      onClick={() => setOpen(false)}
                    >
                      <Button
                        fullWidth
                        className="
                          h-11
                          rounded-xl
                          bg-[#1158ff]
                          font-semibold
                          text-white
                        "
                        startContent={<LogIn size={17} />}
                      >
                        Login
                      </Button>
                    </Link>
                  </motion.div>
                ) : (
                  /* LOGGED IN MOBILE */
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.15,
                    }}
                    className="space-y-2"
                  >
                    {/* User Info */}

                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3">
                      <Avatar size="md">
                        <Avatar.Image
                          alt={user?.name || "User"}
                          src={user?.image || undefined}
                          referrerPolicy="no-referrer"
                        />

                        <Avatar.Fallback>
                          {user?.name
                            ?.charAt(0)
                            ?.toUpperCase() || "U"}
                        </Avatar.Fallback>
                      </Avatar>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-white">
                          {user?.name || "User"}
                        </p>

                        <p className="truncate text-xs text-white/40">
                          {user?.email || "Member"}
                        </p>
                      </div>
                    </div>

                    {/* My Profile */}

                    <Link
                      href="/profile"
                      onClick={() => setOpen(false)}
                      className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        px-4
                        py-3
                        text-sm
                        font-medium
                        text-white/70
                        transition-all
                        hover:bg-white/5
                        hover:text-white
                      "
                    >
                      <User size={18} />

                      My Profile
                    </Link>

                    {/* Sign Out */}

                    <button
                      type="button"
                      onClick={handleSignOut}
                      className="
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-xl
                        px-4
                        py-3
                        text-sm
                        font-medium
                        text-red-400
                        transition-all
                        hover:bg-red-500/10
                      "
                    >
                      <LogOut size={18} />

                      Sign Out
                    </button>
                  </motion.div>
                )}

                {/* Footer */}

                <div className="mt-5 text-center">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
                    Tile Gallery
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

