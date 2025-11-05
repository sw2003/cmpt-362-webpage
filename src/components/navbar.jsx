// src/components/Navbar.jsx
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#projects", label: "Project Links" },
  { href: "#about", label: "About" },
  { href: "#timeline", label: "Timeline" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef(null);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) closeBtnRef.current?.focus();
    const onEsc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open]);

  return (
    <>
      {/* Top bar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-gray-950 border-b border-gray-800 text-gray-100">
        <div className="text-xl font-bold text-white">CMPT 362 Group 11</div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-900"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6 text-gray-300" />
        </button>
      </nav>

      {/* Mobile drawer */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Panel */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-72 bg-gray-900 border-l border-gray-800
        transition-transform duration-300 ease-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
          <span className="text-lg font-semibold text-white">Menu</span>
          <button
            ref={closeBtnRef}
            onClick={() => setOpen(false)}
            className="p-2 rounded-md hover:bg-gray-800"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-gray-300" />
          </button>
        </div>

        <nav className="px-4 py-3">
          <ul className="space-y-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-gray-200 hover:bg-gray-800 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
