import { useState, useEffect } from "react";

const greetings = [
  "Hello",
  "Bonjour",
  "Hola",
  "Ciao",
  "こんにちは",
  "Salam",
  "How far",
  "Namaste",
  "Obokhian",
  "Abole",
];

export default function Preloader({ onFinish }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === greetings.length - 1) {
      const timeout = setTimeout(onFinish, 600);
      return () => clearTimeout(timeout);
    }

    const interval = setTimeout(() => setIndex((i) => i + 1), 200);
    return () => clearTimeout(interval);
  }, [index, onFinish]);

  return (
    <div className="fixed inset-0 z-[100] bg-neutral-900 flex items-center justify-center">
      <div className="dot-grid-light absolute inset-0" />
      <p className="relative z-10 text-white text-4xl font-medium">
        {greetings[index]}
      </p>
    </div>
  );
}
