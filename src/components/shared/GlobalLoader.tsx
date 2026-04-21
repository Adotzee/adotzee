"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export function GlobalLoader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Complete loading after initial mount
        const timer = setTimeout(() => setIsLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ 
                            duration: 0.5,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        className="relative w-24 h-24"
                    >
                        <Image
                            src="/Logos/AdotzeeLogoNoBG2.png"
                            alt="Adotzee Loading"
                            fill
                            className="object-contain"
                            priority
                        />
                    </motion.div>
                    
                    <motion.div 
                        className="mt-8 h-1 w-48 bg-slate-100 rounded-full overflow-hidden"
                    >
                        <motion.div 
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ 
                                duration: 1.5, 
                                repeat: Infinity, 
                                ease: "linear" 
                            }}
                            className="h-full w-full bg-linear-to-r from-blue-500 to-indigo-500"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
