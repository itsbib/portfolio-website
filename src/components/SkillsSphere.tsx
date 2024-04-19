import React, { useEffect, useRef } from "react";
const TagCloud = require("TagCloud");

const SkillsSphere: React.FC = () => {
  const sphereRef = useRef<HTMLDivElement>(null);
  const tagCloudInitializedRef = useRef<boolean>(false);

  useEffect(() => {
    if (!sphereRef.current || tagCloudInitializedRef.current) return;

    const Texts = [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "TYPESCRIPT",
      "MONGOOSE",
      "REACT",
      "NODEJS",
      "MONGODB",
      "EXPRESS",
      "MYSQL",
      "NEST",
      "NEXT",
      "WEB3",
    ];

    new TagCloud(".Sphere", Texts, {
      radius: 200,

      maxSpeed: "normal",
      initSpeed: "fast",

      direction: 135,

      keep: true,
    });

    // Giving color to each text in sphere
    const color = "#FF5F15";
    const sphereElement = sphereRef.current;
    if (sphereElement) {
      sphereElement.style.color = color;
      sphereElement.style.fontWeight = "600";
    }

    tagCloudInitializedRef.current = true;

    return () => {
      // Cleanup if necessary
    };
  }, []);

  return <div ref={sphereRef} className="Sphere"></div>;
};

export default SkillsSphere;
