"use client";

import { useEffect, useState } from "react";

export default function Terminal() {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);

  const lines = [
    "Welcome to my page...",
    "Loading interface...",
    "Preparing content...",
    "Ready to explore...",
  ];

  useEffect(() => {
    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    // Text typing and deleting effect
    let currentIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100; // Slower typing speed

    const textInterval = setInterval(() => {
      const currentText = lines[currentLine];

      if (!isDeleting) {
        // Typing
        if (currentIndex < currentText.length) {
          setText(currentText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          // Wait before starting to delete
          setTimeout(() => {
            isDeleting = true;
          }, 2000); // Wait 2 seconds before deleting
        }
      } else {
        // Deleting
        if (currentIndex > 0) {
          setText(currentText.slice(0, currentIndex - 1));
          currentIndex--;
        } else {
          isDeleting = false;
          // Move to next line
          setCurrentLine((prev) => (prev + 1) % lines.length);
        }
      }
    }, typingSpeed);

    return () => {
      clearInterval(cursorInterval);
      clearInterval(textInterval);
    };
  }, [currentLine]);

  return (
    <div className="w-full max-w-4xl bg-black rounded-lg shadow-xl overflow-hidden p-8 mb-12">
      <div className="font-[VT323] text-3xl">
        <pre className="text-green-400 whitespace-pre-wrap">
          {text}
          <span
            className={`inline-block w-4 h-8 bg-green-400 ${
              showCursor ? "opacity-100" : "opacity-0"
            }`}
          ></span>
        </pre>
      </div>
    </div>
  );
}
