import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion"; // For smooth animations (optional)

interface PreloaderProps {
  progress: number; // Progress from 0 to 100
}

const Preloader: React.FC<PreloaderProps> = ({ progress }) => {
  const maxDigits = 100;
  const digitHeight = 8; // Height of one digit in rem units (adjust as needed)

  const previousProgressRef = useRef(progress); // Store the previous progress value

  // Calculate the focused digit based on progress
  const focusedDigit = Math.floor((progress / 100) * maxDigits);

  // Calculate how much to translate based on the progress value
  const translateY = (progress / 100) * maxDigits * digitHeight;

  // Calculate dynamic transition duration based on progress difference
  const progressDifference = Math.abs(progress - previousProgressRef.current);
  const dynamicTransitionDuration = Math.max(0.3, progressDifference * 0.02); // Adjust transition speed here

  useEffect(() => {
    previousProgressRef.current = progress; // Update the previous progress value after every render
  }, [progress]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      {/* Outer wrapper to center content */}
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Container where digits are stacked and animated */}
        <motion.div
          className="flex flex-col-reverse items-center justify-center"
          style={{
            transform: `translateY(-${translateY - digitHeight / 2}rem)`, // Center the active digit
          }}
          transition={{
            type: "spring", // Smooth spring-like effect for loading
            stiffness: 100,
            damping: 15,
            duration: dynamicTransitionDuration,
          }}
        >
          {Array.from({ length: maxDigits }, (_, index) => (
            <motion.span
              key={index}
              className={`text-9xl font-bold ${
                index === focusedDigit
                  ? "text-blue-600 scale-125" // Active digit scaling and color
                  : "text-gray-300 scale-100" // Inactive digits
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
              }}
              style={{
                marginBottom: "1rem",
                height: `${digitHeight}rem`,
                display: "flex",
                alignItems: "center",
              }}
            >
              {maxDigits - index}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Preloader;
