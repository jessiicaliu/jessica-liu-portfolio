import { useEffect, useState } from "react";

const roles = [
  "Software Developer",
  "AI/ML Enthusiast",
  "Systems Thinker",
  "Problem Solver",
  "Curious Builder",
  "Lifelong Learner",
];

const TYPING_SPEED = 70;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 400;

const getTypingDelay = (text: string) => {
  const lastChar = text[text.length - 1];
  if (!lastChar) return TYPING_SPEED;
  if (lastChar === " " || ",.:;!?".includes(lastChar)) return TYPING_SPEED + 45;
  return TYPING_SPEED + Math.min(20, Math.floor(Math.random() * 16));
};

const TypingText = () => {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    if (!isDeleting && displayed === current) {
      const timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayed === "") {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }, PAUSE_AFTER_DELETE);
      return () => clearTimeout(timeout);
    }

    const nextText = isDeleting
      ? current.slice(0, displayed.length - 1)
      : current.slice(0, displayed.length + 1);

    const timeout = setTimeout(
      () => setDisplayed(nextText),
      isDeleting ? DELETING_SPEED : getTypingDelay(nextText),
    );

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <span className="inline-block min-w-[19ch] whitespace-nowrap leading-none align-baseline text-primary font-jetbrains font-semibold tracking-[0.01em]">
      <span className="align-baseline">{displayed}</span>
      <span
        className="ml-1 inline-block h-[0.95em] w-[2px] rounded-full bg-primary align-baseline translate-y-[0.14em]"
        style={{ animation: "caret-blink 1s steps(1, end) infinite" }}
      />
    </span>
  );
};

export default TypingText;
