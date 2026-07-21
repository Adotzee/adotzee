import React from "react";
import { CardPremium } from "@/components/ui/card-premium";
import { motion } from "framer-motion";
import { Download, Share2, Printer, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResultCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
}

export function ResultCard({
  title,
  value,
  subtitle,
  description,
  children,
}: ResultCardProps) {
  return (
    <CardPremium className="text-center relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-950">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
          {title}
        </h2>
        
        <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-2">
          {value}
        </div>
        
        {subtitle && (
          <div className="text-lg font-medium text-foreground mb-4">
            {subtitle}
          </div>
        )}
        
        {description && (
          <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
            {description}
          </p>
        )}
        
        {children && <div className="mt-6">{children}</div>}
        
        <div className="flex flex-wrap justify-center gap-2 mt-8 pt-6 border-t border-border/50">
          <Button variant="ghost" size="sm" className="text-xs">
            <Download className="w-3 h-3 mr-1" /> PDF
          </Button>
          <Button variant="ghost" size="sm" className="text-xs">
            <Printer className="w-3 h-3 mr-1" /> Print
          </Button>
          <Button variant="ghost" size="sm" className="text-xs">
            <Share2 className="w-3 h-3 mr-1" /> Share
          </Button>
          <Button variant="ghost" size="sm" className="text-xs">
            <LinkIcon className="w-3 h-3 mr-1" /> Copy Link
          </Button>
        </div>
      </motion.div>
    </CardPremium>
  );
}
