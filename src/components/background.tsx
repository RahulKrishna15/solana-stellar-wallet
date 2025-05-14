import { motion } from "framer-motion";

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden h-screen">
      {/* Base gradient background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-solana-primary/5 via-background to-solana-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />

      {/* Optimized animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-solana-primary/10 blur-[100px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ willChange: "transform" }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-solana-accent/10 blur-[100px]"
        animate={{
          x: [0, -50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ willChange: "transform" }}
      />

      {/* Reduced number of floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-solana-primary/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            willChange: "transform",
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Simplified grid lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(99,102,241,0.1)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Reduced number of glowing dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 rounded-full bg-solana-primary/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            willChange: "transform",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: Math.random() * 2 + 2,
            repeat: Infinity,
            delay: Math.random() * 1,
          }}
        />
      ))}

      {/* Optimized light beams */}
      <motion.div
        className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-solana-primary/20 to-transparent"
        animate={{
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        style={{ willChange: "opacity" }}
      />
    </div>
  );
}
