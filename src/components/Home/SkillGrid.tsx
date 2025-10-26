"use client";

import { useEffect, useRef } from "react";

const frontendSkills = [
  "JavaScript",
  "TypeScript",
  "Next.js",
  "React",
  "React Native",
  "Expo",
  "HTML",
  "CSS",
];

const backendSkills = [
  "NestJS",
  "MongoDB",
  "Mongoose",
  "Node.js",
  "Web3",
  "MySQL",
  "Express.js",
];

const SkillGrid = () => {
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setScrollWidth = (ref: React.RefObject<HTMLDivElement | null>) => {
      const el = ref.current;
      if (el) {
        const width = el.scrollWidth / 2;
        el.style.setProperty("--scroll-width", `${width}px`);
      }
    };

    setScrollWidth(topRef);
    setScrollWidth(bottomRef);

    window.addEventListener("resize", () => {
      setScrollWidth(topRef);
      setScrollWidth(bottomRef);
    });

    return () =>
      window.removeEventListener("resize", () => {
        setScrollWidth(topRef);
        setScrollWidth(bottomRef);
      });
  }, []);

  return (
    <div className="relative overflow-hidden my-20 gap-2 flex flex-col">
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-[#171717] via-transparent to-[#171717]" />

      <div ref={topRef} className="flex whitespace-nowrap animate-scroll">
        {[...backendSkills, ...backendSkills].map((skill, i) => (
          <div key={i} className="px-4">
            <h3 className="font-normal">{skill}</h3>
          </div>
        ))}
      </div>

      <div
        ref={bottomRef}
        className="flex whitespace-nowrap animate-scroll-reverse mt-4"
      >
        {[...frontendSkills, ...frontendSkills].map((skill, i) => (
          <div key={i} className="px-4">
            <h3 className="font-normal">{skill}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillGrid;
