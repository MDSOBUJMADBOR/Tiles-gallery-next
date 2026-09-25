
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const MyNavLink = ({ href, className = "", children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={`relative ${className}`}>
      {isActive && (
        <motion.div
          layoutId="activeNavLink"
          className="absolute inset-0 rounded-lg bg-white/10"
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 30,
          }}
        />
      )}

      <span
        className={`relative z-10 block px-4 py-2 text-sm font-medium transition-colors duration-200 ${
          isActive
            ? "text-white"
            : "text-white/60 hover:text-white"
        }`}
      >
        {children}
      </span>
    </Link>
  );
};

export default MyNavLink;
