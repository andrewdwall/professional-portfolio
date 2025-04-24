import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-center items-center">
        <div className="flex space-x-8 text-md font-medium">
          {[
            { href: "#about", label: "About" },
            { href: "#projects", label: "Projects" },
            { href: "#experience", label: "Experience" },
            { href: "#education", label: "Education" },
            { href: "#contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="relative text-gray-700 transition duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-sky-400 hover:to-emerald-400"
            >
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-sky-400 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}