import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";


const Footer = () => {
  return (
    <footer className=" bg-[#0f172a]  text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-start">

        {/* Logo + Description */}
        <div className="md:col-span-1">
          <h2 className="text-white text-xl font-semibold mb-3 flex items-center gap-2">
            ◈ TileGallery
          </h2>
          <p className="text-sm text-gray-400">
            Premium tiles for beautiful spaces. Quality, design & durability.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-0 text-sm">
            <Link href={"/"}><li className="hover:text-white cursor-pointer">Home</li></Link>
            <Link href={"/all-tiles"}><li className="hover:text-white cursor-pointer my-3">All Tiles</li></Link>
            <Link href={"/profile"}><li className="hover:text-white cursor-pointer">My Profile</li></Link>
             </ul>
        </div>


        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>sobujmadbor660@gmail.com</li>
            <li>+88 01826140440</li>
            <li>
              College Rode , Madaripur <br /> Bangladesh
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
  <h3 className="text-white font-semibold mb-3">Social</h3>

  <div className="flex gap-5 items-center md:items-start justify-center md:justify-start">
    
    {/* Facebook */}
    <a
      href="https://www.facebook.com/sobuj.madbor.735717"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 p-2 rounded cursor-pointer hover:scale-110 transition"
    >
      <FaFacebookF />
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/MDSOBUJMADBOR"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black p-2 rounded cursor-pointer hover:scale-110 transition"
    >
      <FaSquareGithub />
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/md-sobuj-madbor"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-500 p-2 rounded cursor-pointer hover:scale-110 transition"
    >
      <ImLinkedin />
    </a>

  </div>
</div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © 2026 TileGallery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;