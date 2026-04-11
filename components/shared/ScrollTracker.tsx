"use client";

import { useEffect, useRef } from "react";
import { trackScrollDepth } from "@/lib/analytics";

/**
 * ScrollTracker - Tracks user scroll depth and triggers GA4 events.
 * Key for understanding user engagement and SXO performance.
 */
export function ScrollTracker() {
    const trackedDepths = useRef<Set<number>>(new Set());

    useEffect(() => {
        const handleScroll = () => {
            const h = document.documentElement;
            const b = document.body;
            const st = "scrollTop";
            const sh = "scrollHeight";
            
            const percent = Math.floor(
                ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100
            );

            // Track milestones: 25%, 50%, 75%, 100%
            [25, 50, 75, 100].forEach((depth) => {
                if (percent >= depth && !trackedDepths.current.has(depth)) {
                    trackScrollDepth(depth);
                    trackedDepths.current.add(depth);
                }
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return null; // Side-effect only component
}
