"use client";

import { Button } from "@/components/ui/button";
import { useUiStore } from "@/store/useUiStore";
import { Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function StickyBottomCTA() {
    const openLeadModal = useUiStore((state) => state.openLeadModal);
    const [isVisible, setIsVisible] = useState(false);

    // WhatsApp Configuration
    const whatsappNumber = "917012627835";
    const message = "Hi Adotzee, I need course guidance";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 100, opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="lg:hidden fixed bottom-6 left-5 right-5 z-40"
                >
                    <div className="flex items-center gap-2 p-1 bg-white/80 backdrop-blur-xl rounded-[2rem] border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                        {/* Primary Action - Big part of split */}
                        <Button
                            onClick={() => openLeadModal(undefined, "sticky_bottom_cta")}
                            className="flex-[3] h-12 md:h-14 bg-[#2563EB] hover:bg-blue-700 text-white rounded-[1.75rem] font-bold text-sm border border-white/10 flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg"
                        >
                            <Sparkles className="size-4 animate-pulse text-blue-200" />
                            Admission Guidance
                        </Button>

                        {/* WhatsApp Action - Small part of split */}
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 max-w-[70px] h-12 md:h-14 bg-[#25D366] hover:bg-[#20BE5A] text-white rounded-[1.75rem] flex items-center justify-center transition-all shadow-lg relative group overflow-hidden"
                            aria-label="Chat on WhatsApp"
                        >
                            <FaWhatsapp className="size-6 relative z-10" />
                            {/* Inner ripple effect */}
                            <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full" />
                        </motion.a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
