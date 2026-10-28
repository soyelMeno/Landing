import { ReactNode } from "react";
import Container from "./Container";

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  tone?: "light" | "dark";
  children: ReactNode;
  className?: string;
};

export default function Section({
  eyebrow,
  title,
  description,
  action,
  tone = "light",
  children,
  className = "",
}: SectionProps) {
  const isDark = tone === "dark";

  return (
    <section
      className={`py-20 sm:py-28 ${
        isDark ? "bg-panel text-foreground" : "bg-[#f7f6f4] text-[#111111]"
      } ${className}`}
    >
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {eyebrow && (
              <p
                className={`eyebrow ${
                  isDark ? "" : "text-muted opacity-80"
                }`}
              >
                {eyebrow}
              </p>
            )}
            <h2 className="mt-2 text-2xl font-medium tracking-tight sm:text-3xl">
              {title}
            </h2>
            {description && (
              <p
                className={`mt-2 max-w-md text-sm leading-relaxed ${
                  isDark ? "text-muted" : "text-neutral-500"
                }`}
              >
                {description}
              </p>
            )}
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </div>

        <div className="mt-12">{children}</div>
      </Container>
    </section>
  );
}
