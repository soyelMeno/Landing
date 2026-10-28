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

  hideTitleOnMobile?: boolean;
  mobileLayout?: boolean;
};
export default function Section({
  eyebrow,
  title,
  description,
  action,
  tone = "light",
  children,
  className = "",
  hideTitleOnMobile = false,
  mobileLayout=false
}: SectionProps) {
  const isDark = tone === "dark";

  return (
    <section
      className={`py-24 md:py-32 ${
        isDark
          ? "bg-panel text-foreground"
          : "bg-[#f7f6f4] text-[#111111]"
      } ${className}`}
    >
      <Container>

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <div className="max-w-2xl">

            {eyebrow && (
              <p
  className={`
    eyebrow
    ${mobileLayout ? "block" : "hidden md:block"}
    ${isDark ? "" : "text-muted opacity-80"}
  `}
>
  {eyebrow}
</p>
            )}

            <h2
  className={`
    mt-2
    text-2xl
    sm:text-3xl
    font-medium
    tracking-tight

    ${hideTitleOnMobile ? "hidden sm:block" : ""}
  `}
>
              {title}
            </h2>

            {description && (
              <p
                className={`mt-5 text-base leading-7 ${
                  isDark
                    ? "text-muted"
                    : "text-neutral-500"
                }`}
              >
                {description}
              </p>
            )}

          </div>

          {action && (
            <div className="self-start md:self-end">
              {action}
            </div>
          )}

        </div>

        <div className="mt-14 md:mt-16">
          {children}
        </div>

      </Container>
    </section>
  );
}