import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUniversity,
  faBookOpen,
  faChalkboardTeacher,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

// Stats data
const stats = [
  { label: "Colleges", target: 50, icon: faUniversity },
  { label: "Courses Offered", target: 30, icon: faBookOpen },
  { label: "Add-on Courses", target: 200, icon: faChalkboardTeacher },
];

// Counting animation component
const AnimatedCounter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const interval = 16;
    const increment = target / (duration / interval);
    
    const timer = setInterval(() => {
      setCount((prev) =>
        prev + increment >= target ? (clearInterval(timer), target) : prev + increment
      );
    }, interval);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <motion.span className="text-5xl font-bold text-blue-600">
      {Math.floor(count)}{suffix}
    </motion.span>
  );
};

// Stat card component with animations
const StatCard = ({ label, target, delay, icon }) => {
  const controls = useAnimation();

  const hoverAnimation = {
    scale: 1.05,
    rotate: [0, -2, 2, -2, 0],
    transition: { duration: 0.5, type: "spring" },
  };

  return (
    <motion.div
      className="text-center bg-white p-8 rounded-lg shadow-lg cursor-pointer hover:scale-110"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay } }}
      whileHover={hoverAnimation}
      viewport={{ once: true }}
      animate={controls}
      onHoverStart={() => controls.start(hoverAnimation)}
      onHoverEnd={() => controls.start({ scale: 1, rotate: 0 })}
    >
      <FontAwesomeIcon icon={icon} className="text-4xl text-blue-600 m-1 me-3" />
      <AnimatedCounter target={target} suffix="+" />
      <p className="text-xl text-gray-700 mt-2">{label}</p>
    </motion.div>
  );
};

// Main component
const Counts = () => (
  <div className="bg-gradient-to-r from-blue-50 to-gray-100 py-16 md:py-36 w-full min-w-screen">
    <div className="container mx-auto px-4">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {stats.map((stat, index) => (
          <StatCard key={stat.label} {...stat} delay={index * 0.2} />
        ))}
      </motion.div>
    </div>
  </div>
);

export default Counts;
