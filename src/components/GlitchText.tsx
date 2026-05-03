import { useEffect, useState } from "react";

const GLITCH_CHARS = "!<>-_\\/[]{}—=+*^?#$%@&";

function randomChar() {
  return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
}

export default function GlitchText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState(text);
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    triggerGlitch();

    const interval = setInterval(() => {
      triggerGlitch();
    }, 4000 + Math.random() * 4000);

    return () => clearInterval(interval);
  }, []);

  function triggerGlitch() {
    setGlitching(true);
    let iterations = 0;
    const maxIterations = 12;

    const glitchInterval = setInterval(() => {
      setDisplayed(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (iterations > maxIterations * 0.6 && i < iterations * 0.5) {
              return text[i];
            }
            return Math.random() < 0.4 ? randomChar() : char;
          })
          .join("")
      );

      iterations++;

      if (iterations >= maxIterations) {
        clearInterval(glitchInterval);
        setDisplayed(text);
        setGlitching(false);
      }
    }, 80);
  }

  return (
    <span
      className="text-[#8bc34a] cursor-pointer inline-block"
      onClick={triggerGlitch}
      title="click me"
      style={{
        minWidth: "max-content",
        width: "max-content",
        textShadow: glitching
          ? "2px 0 #ff0000, -2px 0 #0000ff"
          : "none",
        transition: "text-shadow 0.1s",
      }}
    >
      {displayed}
    </span>
  );
}
