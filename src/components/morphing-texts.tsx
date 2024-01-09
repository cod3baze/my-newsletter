"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function MorphingTexts() {
  const [texts, setTexts] = useState(["tecnologia", "finanças"]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTexts = texts.slice(1).concat(texts[0]); // Rotacionar os textos
      setTexts(newTexts);
    }, 5000);

    return () => clearInterval(interval);
  }, [texts]);

  return (
    <motion.span
      initial={{ y: -50, opacity: 0, scale: 0.8 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {texts[0]}
    </motion.span>
  );
}
