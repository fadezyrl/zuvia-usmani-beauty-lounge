"use client";

import { useRef, type ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type ScrollRevealProps = {
  children: ReactNode;
};

export const ScrollReveal = ({
  children,
}: ScrollRevealProps): React.JSX.Element => {
  const scopeRef = useRef<HTMLDivElement>(null);
  useScrollReveal(scopeRef);

  return (
    <div ref={scopeRef} className="scroll-reveal-scope">
      {children}
    </div>
  );
};
