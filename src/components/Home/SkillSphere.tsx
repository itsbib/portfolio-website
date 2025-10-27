"use client";

import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const TagCloud = require("TagCloud");

interface SkillSphereProps {
  radius?: number;
}

const SkillSphere: React.FC<SkillSphereProps> = ({ radius }) => {
  const sphereRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tagCloudInstanceRef = useRef<any>(null);
  const [calculatedRadius, setCalculatedRadius] = useState(radius ?? 200);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setCalculatedRadius(150);
      } else {
        setCalculatedRadius(180);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!sphereRef.current) return;

    if (tagCloudInstanceRef.current) {
      tagCloudInstanceRef.current.destroy();
      tagCloudInstanceRef.current = null;
    }

    if (sphereRef.current) {
      sphereRef.current.innerHTML = "";
    }

    const texts = [
      "JavaScript",
      "TypeScript",
      "Web3",
      "MySQL",
      "Next.js",
      "NestJS",
      "MongoDB",
      "Mongoose",
      "Node.js",
      "React",
      "Express.js",
      "React Native",
      "Expo",
      "HTML",
      "CSS",
    ];

    const tagCloudInstance = TagCloud(sphereRef.current, texts, {
      radius: calculatedRadius,
      maxSpeed: "normal",
      initSpeed: "normal",
      direction: 135,
      keep: true,
    });

    sphereRef.current.style.fontSize = "14px";
    tagCloudInstanceRef.current = tagCloudInstance;

    return () => {
      if (tagCloudInstanceRef.current) {
        tagCloudInstanceRef.current.destroy();
        tagCloudInstanceRef.current = null;
      }
    };
  }, [calculatedRadius]);

  return <div ref={sphereRef} className="tagcloud"></div>;
};

export default SkillSphere;
