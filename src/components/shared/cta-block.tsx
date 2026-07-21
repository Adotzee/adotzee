import React from "react";
import { CardPremium } from "@/components/ui/card-premium";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface CTABlockProps {
  title?: string;
  description?: string;
}

export function CTABlock({
  title = "Ready for the Next Step?",
  description = "Connect with our expert admission counsellors to find the perfect college for you.",
}: CTABlockProps) {
  return (
    <CardPremium className="mt-8 text-center bg-blue-50/50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800">
      <h3 className="text-xl font-semibold mb-2 text-blue-900 dark:text-blue-100">{title}</h3>
      <p className="text-sm text-blue-700/80 dark:text-blue-200/80 mb-6">{description}</p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="w-full sm:w-auto gap-2 bg-green-600 hover:bg-green-700 text-white">
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </Button>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="outline" className="w-full sm:w-auto gap-2">
            <Calendar className="w-4 h-4" />
            Book Free Guidance
          </Button>
        </motion.div>
      </div>
    </CardPremium>
  );
}
