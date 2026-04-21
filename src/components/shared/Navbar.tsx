"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { useUiStore } from "@/store/useUiStore";
import { cn } from "@/lib/utils";

export function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Initialize scrolled state on mount to prevent flickering on reload
    useEffect(() => {
        const initialScroll = window.scrollY;
        if (initialScroll > 50) setScrolled(true);
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;

        // Show pill background when scrolled past 50px
        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }

        // Hide navbar completely when scrolling down, show when scrolling up
        // Add a 50px buffer to prevent rapid flickering on small scrolls
        if (latest > 200 && latest > previous + 10 && !isMenuOpen) {
            setHidden(true);
        } else if (previous > latest + 10 || latest <= 200) {
            setHidden(false);
        }
    });

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: "-120%", opacity: 0 }
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-4 md:mt-6 px-4 pointer-events-none"
            >
                <motion.div
                    initial={false}
                    animate={{
                        maxWidth: scrolled ? "768px" : "1152px",
                        padding: scrolled ? "8px 24px" : "16px 40px",
                        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.85)" : "rgba(0, 0, 0, 0.45)",
                        borderRadius: scrolled ? "9999px" : "32px",
                        backdropFilter: scrolled ? "blur(20px)" : "blur(32px)",
                        border: scrolled ? "1px solid rgba(226, 232, 240, 0.8)" : "1px solid rgba(255, 255, 255, 0.15)",
                        boxShadow: scrolled 
                            ? "0 20px 40px -10px rgba(0, 0, 0, 0.1)" 
                            : "0 25px 50px -12px rgba(0, 0, 0, 0.2)"
                    }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 200, 
                        damping: 28,
                        mass: 0.5
                    }}
                    className="flex items-center gap-4 justify-between w-full pointer-events-auto relative overflow-hidden"
                    style={{ 
                        backfaceVisibility: "hidden",
                        transformStyle: "preserve-3d",
                        willChange: "max-width, padding, background-color"
                    }}
                >
                    <Link href="/" className="flex items-center gap-1 shrink-0">
                        <Image
                            src="/Logos/AdotzeeLogoNoBG2.png"
                            alt="Adotzee Logo"
                            width={40}
                            height={40}
                            className="object-contain w-8 h-8 md:w-10 md:h-10 will-change-transform"
                            priority
                        />
                        <Image
                            src="/Logos/AdotzeeLogoTextNoBG2.png"
                            alt="Adotzee Text"
                            width={120}
                            height={40}
                            className={cn(
                                "object-contain w-24 md:w-[120px] h-8 md:h-10 will-change-transform transition-all duration-500",
                                scrolled ? "brightness-100" : "brightness-0 invert"
                            )}
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className={cn(
                        "hidden lg:flex items-center space-x-8 text-sm font-bold transition-colors duration-500",
                        scrolled ? "text-slate-600" : "text-white/80"
                    )}>
                        {[
                            { label: "Courses", href: "/courses" },
                            { label: "Colleges", href: "/colleges" },
                            { label: "Add-ons", href: "/addons" },
                            { label: "Recommendations", href: "/recommendations" }
                        ].map((item) => (
                            <Link key={item.href} href={item.href} className="relative group px-2 py-1">
                                <span className={cn(
                                    "relative z-10 transition-colors duration-300",
                                    scrolled ? "group-hover:text-blue-600" : "group-hover:text-white"
                                )}>
                                    {item.label}
                                </span>
                                <motion.span className={cn(
                                    "absolute inset-0 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 z-0",
                                    scrolled ? "bg-blue-50" : "bg-white/10"
                                )} />
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center space-x-2 md:space-x-4">
                        <Button
                            onClick={() => useUiStore.getState().openLeadModal(undefined, "navbar_cta")}
                            className={cn(
                                "hidden sm:block px-6 h-10 rounded-full text-sm font-black transition-all shadow-xl",
                                scrolled 
                                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20" 
                                    : "bg-white hover:bg-white/90 text-blue-600 shadow-white/10"
                            )}
                        >
                            Get Started
                        </Button>

                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className={cn(
                                "lg:hidden p-2.5 rounded-full backdrop-blur-md transition-all",
                                scrolled ? "bg-slate-100 text-slate-900" : "bg-white/10 text-white"
                            )}
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>
            </motion.nav>

            {/* Mobile Navigation Sheet */}
            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
}
