"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];


export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    // scroll effect (glass + shrink)
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 w-full z-50"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-2">
                <div
                    className={`flex items-center justify-between transition-all duration-300
          ${scrolled
                            ? "bg-zinc-900/80 backdrop-blur-xl py-2 shadow-xl"
                            : "bg-zinc-900/60 backdrop-blur-md py-3"
                        }
          border border-white/10 rounded-2xl px-6`}
                >
                    {/* Logo (3D hover) */}
                    <div className="text-white font-bold tracking-wider text-lg hover:scale-105 transition">
                        Rayan.dev
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex gap-6 relative">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative text-sm text-white/70 hover:text-white transition"
                            >
                                {item.name}

                                {/* active underline glow */}
                                {pathname === item.href && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute left-0 -bottom-1 h-[2px] w-full bg-white shadow-[0_0_10px_white]"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>



                    {/* Mobile button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-white text-2xl"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden mx-6 mt-2 bg-zinc-900/90 backdrop-blur-xl
                     border border-white/10 rounded-2xl p-4"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => {
                                setOpen(false);
                            }}
                            className="block py-2 text-white/70 hover:text-white transition"
                        >
                            {item.name}
                        </Link>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
}