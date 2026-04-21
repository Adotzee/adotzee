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
                    hidden: { y: "-110%", opacity: 0 }
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-4 md:mt-6 px-4 will-change-transform"
            >
                <motion.div
                    layout
                    initial={false}
                    animate={{
                        width: scrolled ? "100%" : "100%",
                        maxWidth: scrolled ? "768px" : "1152px",
                        padding: scrolled ? "8px 24px" : "16px 40px",
                    }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 200, 
                        damping: 30,
                    }}
                    className={cn(
                        "flex items-center gap-4 justify-between transition-colors duration-500",
                        scrolled
                            ? "bg-white/70 backdrop-blur-2xl shadow-floating rounded-full border border-slate-200/50"
                            : "rounded-3xl shadow-2xl bg-black/40 backdrop-blur-3xl border border-white/10"
                    )}
                >
                    <Link href="/" className="flex items-center gap-1 shrink-0">
                        <Image
                            src="/Logos/AdotzeeLogoNoBG2.png"
                            alt="Adotzee Logo"
                            width={32}
                            height={32}
                            className="object-contain md:w-10 h-auto will-change-transform"
                            priority
                        />

                        <Image
                            src="/Logos/AdotzeeLogoTextNoBG2.png"
                            alt="Adotzee Text"
                            width={100}
                            height={32}
                            className="object-contain md:w-[120px] h-auto will-change-transform"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-black/50">
                        <Link href="/courses" className="relative group px-2 py-1">
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-brand-accent">Courses</span>
                            <motion.span className="absolute inset-0  rounded-md scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 z-0" />
                        </Link>
                        <Link href="/colleges" className="relative group px-2 py-1">
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-brand-accent">Colleges</span>
                            <motion.span className="absolute inset-0  rounded-md scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 z-0" />
                        </Link>
                        <Link href="/addons" className="relative group px-2 py-1">
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-brand-accent">Add-ons</span>
                            <motion.span className="absolute inset-0  rounded-md scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 z-0" />
                        </Link>
                        <Link href="/recommendations" className="relative group px-2 py-1">
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-brand-accent">Recommendations</span>
                            <motion.span className="absolute inset-0 rounded-md scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 z-0" />
                        </Link>
                    </div>

                    <div className="flex items-center space-x-2 md:space-x-4">
                        {/* Desktop CTA */}
                        <Button
                            onClick={() => useUiStore.getState().openLeadModal(undefined, "navbar_cta")}
                            className="hidden sm:block bg-brand-accent hover:bg-[#60A5FA] text-white px-6 h-10 rounded-full text-sm font-semibold transition-all shadow-brand-glow hover:shadow-brand-glow-lg"
                        >
                            Begin
                        </Button>

                        {/* Mobile Menu Trigger */}
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            aria-label="Open navigation menu"
                            className="lg:hidden p-2 rounded-full bg-white/50 backdrop-blur-md  shadow-sm"
                        >
                            <Menu className="w-6 h-6 text-foreground" />
                        </button>
                    </div>
                </motion.div>
            </motion.nav>

            {/* Mobile Navigation Sheet */}
            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
}
