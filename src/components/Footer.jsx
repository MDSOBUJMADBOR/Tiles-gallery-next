
"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0f172a] text-gray-300">

      {/* ================= DECORATIVE BACKGROUND ================= */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto container px-5 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* ================= BRAND ================= */}
          <div className="sm:col-span-2 lg:col-span-1">

            <Link
              href="/"
              className="group inline-flex items-center gap-2"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-xl font-bold text-white shadow-lg shadow-blue-500/20 transition duration-300 group-hover:scale-105">
                ◈
              </span>

              <span className="text-xl font-bold tracking-tight text-white">
                Tile<span className="text-blue-400">Gallery</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Premium tiles for beautiful spaces. Discover elegant designs,
              quality materials, and durable solutions for your home and
              interior projects.
            </p>

            {/* Small Trust Badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-400 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Quality • Design • Durability
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="group inline-flex items-center text-sm text-gray-400 transition duration-200 hover:translate-x-1 hover:text-white"
                >
                  <span className="mr-2 text-blue-400 opacity-0 transition group-hover:opacity-100">
                    →
                  </span>
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/all-tiles"
                  className="group inline-flex items-center text-sm text-gray-400 transition duration-200 hover:translate-x-1 hover:text-white"
                >
                  <span className="mr-2 text-blue-400 opacity-0 transition group-hover:opacity-100">
                    →
                  </span>
                  All Tiles
                </Link>
              </li>

              <li>
                <Link
                  href="/profile"
                  className="group inline-flex items-center text-sm text-gray-400 transition duration-200 hover:translate-x-1 hover:text-white"
                >
                  <span className="mr-2 text-blue-400 opacity-0 transition group-hover:opacity-100">
                    →
                  </span>
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>

            <ul className="space-y-4 text-sm">

              <li>
                <a
                  href="mailto:sobujmadbor660@gmail.com"
                  className="group flex items-start gap-3 text-gray-400 transition hover:text-white"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-blue-400 transition group-hover:bg-blue-500/10">
                    @
                  </span>

                  <span className="break-all leading-6">
                    sobujmadbor660@gmail.com
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+8801826140440"
                  className="group flex items-start gap-3 text-gray-400 transition hover:text-white"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-blue-400 transition group-hover:bg-blue-500/10">
                    ☎
                  </span>

                  <span>+88 01826140440</span>
                </a>
              </li>

              <li className="flex items-start gap-3 text-gray-400">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-blue-400">
                  ⌖
                </span>

                <span className="leading-6">
                  College Road,
                  <br />
                  Madaripur, Bangladesh
                </span>
              </li>

            </ul>
          </div>

          {/* ================= SOCIAL ================= */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Connect With Us
            </h3>

            <p className="mb-5 max-w-xs text-sm leading-6 text-gray-400">
              Follow TileGallery and stay connected for new designs,
              updates, and inspiration.
            </p>

            <div className="flex items-center gap-3">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/sobuj.madbor.735717"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/20"
              >
                <FaFacebookF
                  size={17}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/MDSOBUJMADBOR"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-gray-500 hover:bg-black hover:text-white hover:shadow-lg hover:shadow-black/30"
              >
                <FaGithub
                  size={19}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/md-sobuj-madbor"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/20"
              >
                <FaLinkedinIn
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <p className="text-xs leading-5 text-gray-500 sm:text-sm">
            © {currentYear}{" "}
            <span className="font-medium text-gray-300">
              TileGallery
            </span>
            . All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs text-gray-500 sm:text-sm">
            <Link
              href="/"
              className="transition hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/all-tiles"
              className="transition hover:text-white"
            >
              Browse Tiles
            </Link>

            <span className="hidden h-4 w-px bg-gray-700 sm:block" />

            <span className="text-gray-500">
              Made with ❤️
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

