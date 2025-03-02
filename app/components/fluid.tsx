"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

// Particle component for the dust effect
interface ParticleProps {
  id: string; // Changed from number to string
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
}

const Particle = ({ x, y, size, opacity, duration }: ParticleProps) => {
  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{
        x,
        y,
        width: size,
        height: size,
        opacity,
      }}
      animate={{
        x: x + (Math.random() * 40 - 20),
        y: y + (Math.random() * 40 - 20),
        opacity: 0,
      }}
      transition={{
        duration,
        ease: "easeOut",
      }}
    />
  );
};

export default function RectangleBox() {
  const [particles, setParticles] = useState<ParticleProps[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Generate particles on component mount and periodically
  useEffect(() => {
    if (!containerRef.current) return;

    // Get the dimensions of the container
    const rect = containerRef.current.getBoundingClientRect();
    setDimensions({ width: rect.width, height: rect.height });

    // Function to generate new particles
    const generateParticles = () => {
      const newParticles: ParticleProps[] = [];
      const particleCount = 30; // Adjust for more/less particles

      for (let i = 0; i < particleCount; i++) {
        // Determine if particle should be on horizontal or vertical edge
        const isHorizontal = Math.random() > 0.5;

        let x, y;
        if (isHorizontal) {
          x = Math.random() * rect.width;
          y = Math.random() > 0.5 ? -5 : rect.height + 5;
        } else {
          x = Math.random() > 0.5 ? -5 : rect.width + 5;
          y = Math.random() * rect.height;
        }

        newParticles.push({
          id: crypto.randomUUID(), // Ensure unique key
          x,
          y,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          duration: Math.random() * 2 + 1,
        });
      }

      setParticles((prev) => [...prev, ...newParticles]);

      // Remove old particles to prevent memory issues
      setTimeout(() => {
        setParticles((prev) => prev.slice(particleCount));
      }, 3000);
    };

    generateParticles();
    const interval = setInterval(generateParticles, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-4 pl-60 justify-center h-[30vh]">
      <div
        ref={containerRef}
        className="relative w-5xl h-[30vh] bg-black border border-neutral-800 rounded-md flex flex-col items-center justify-center p-6 overflow-hidden"
      >
        {/* Particles */}
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            x={particle.x}
            y={particle.y}
            size={particle.size}
            opacity={particle.opacity}
            duration={particle.duration}
            id={""}
          />
        ))}

        {/* Content */}
        <h1 className="text-3xl font-bold text-white mb-2 z-10">
          Introducing Fluid Compute
        </h1>
        <p className="text-medium text-neutral-400 mb-4 z-10">
          The power of servers in serverless form
        </p>
        <button className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors z-10">
          Learn more
        </button>
      </div>
    </div>
  );
}
