import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const roles = [
  "Front-End Developer",
  "UI/UX Enthusiast",
  "React Specialist",
  "Web Architect",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === current) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }
    if (isDeleting && displayText === "") {
      setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 0);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? current.substring(0, displayText.length - 1)
          : current.substring(0, displayText.length + 1),
      );
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Subtle Grid Overlay */}
      <div className="grid-background absolute inset-0 opacity-50" />

      {/* Subtle Accent Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-[0.06] blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse, var(--accent) 0%, var(--accent-secondary) 50%, transparent 70%)",
        }}
      />

      {/* Main Content */}
      <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Status Badge */}
          <div
            className={`mb-8 flex justify-center transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <div className="gradient-border inline-flex items-center gap-2.5 rounded-full bg-accent/5 px-5 py-2 text-sm font-bold tracking-widest text-accent backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              OPEN TO OPPORTUNITIES
            </div>
          </div>

          {/* Big Bold Headline */}
          <h1
            className={`text-5xl font-extrabold tracking-tight text-foreground font-display sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] transition-all duration-700 delay-150 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Front-End
            <br />
            <span className="gradient-text">Developer</span>
          </h1>

          {/* ── Pipeline Animation ── */}
          <div
            className={`my-10 mx-auto max-w-xl transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            {/* Pipeline Container */}
            <div className="relative">
              {/* Pipeline Nodes */}
              <div className="flex items-center justify-between relative z-10">
                {["Design", "Code", "Build", "Deploy"].map((label) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2.5"
                  >
                    <div
                      className="h-5 w-5 rounded-full border-2 border-accent/60 bg-accent/20 transition-all duration-300"
                      style={{
                        boxShadow:
                          "0 0 12px rgba(var(--accent-rgb),0.4), 0 0 24px rgba(var(--accent-rgb),0.15)",
                      }}
                    />
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground sm:text-xs">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* The Pipe */}
              <div className="absolute top-[7px] left-[10px] right-[10px] z-0">
                {/* Pipe body */}
                <div className="h-[6px] w-full rounded-full bg-accent/10" />
                {/* Water flow - stream 1 */}
                <div className="absolute inset-0 h-[6px] overflow-hidden rounded-full">
                  <div
                    className="h-full w-[40%] rounded-full animate-pipeline-flow"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, var(--accent) 30%, var(--accent-secondary) 70%, transparent 100%)",
                      filter: "blur(0.5px)",
                      opacity: 0.9,
                    }}
                  />
                </div>
                {/* Water flow - stream 2 (delayed, subtle) */}
                <div className="absolute inset-0 h-[6px] overflow-hidden rounded-full">
                  <div
                    className="h-full w-[25%] rounded-full animate-pipeline-flow-delayed"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, var(--accent) 40%, var(--accent-secondary) 60%, transparent 100%)",
                      filter: "blur(2px)",
                      opacity: 0.4,
                    }}
                  />
                </div>
                {/* Pipe glow */}
                <div
                  className="absolute inset-0 h-[10px] -top-[2px] rounded-full animate-pipeline-flow opacity-20"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, var(--accent), var(--accent-secondary), transparent)",
                    filter: "blur(6px)",
                    width: "40%",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Typewriter Role */}
          <div
            className={`mb-4 transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-lg text-muted-foreground font-mono sm:text-xl">
              {"< "}
              <span className="text-accent">{displayText}</span>
              <span className="animate-pulse text-accent ml-0.5">|</span>
              {" />"}
            </span>
          </div>

          {/* Subheading */}
          <p
            className={`mx-auto mb-12 max-w-2xl text-base text-muted-foreground/80 sm:text-lg leading-relaxed transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            I'm{" "}
            <span className="text-foreground font-semibold">
              Muhammad Raihan Hatim
            </span>
            , building scalable and elegant web interfaces with modern
            technologies.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col items-center justify-center gap-5 sm:flex-row transition-all duration-700 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <Button
              size="lg"
              className="group relative h-12 rounded-full px-8 text-base font-bold overflow-hidden bg-linear-to-r from-accent to-(--accent-secondary) text-white border-0 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-105 active:scale-95 transition-all duration-300"
              asChild
            >
              <a href="/cv/MRaihanHatim-FrontEnd.pdf" target="_blank">
                <span className="relative z-10 flex items-center gap-2">
                  Download CV
                  <Download className="h-4 w-4" />
                </span>
              </a>
            </Button>

            <div className="flex gap-3">
              {[
                {
                  icon: <Github className="h-5 w-5" />,
                  href: "https://github.com/mraihanhatim04",
                  label: "GitHub",
                },
                {
                  icon: <Linkedin className="h-5 w-5" />,
                  href: "https://www.linkedin.com/in/mraihanhatim/",
                  label: "LinkedIn",
                },
                {
                  icon: <Mail className="h-5 w-5" />,
                  href: "https://mail.google.com/mail/?view=cm&fs=1&to=raihanhatim.01@gmail.com",
                  label: "Email",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="group flex items-center justify-center h-12 w-12 rounded-full glass-card text-muted-foreground transition-all duration-300 hover:text-accent hover:glow-sm hover:scale-110 active:scale-95"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-linear-to-t from-background via-background/50 to-transparent" />
    </section>
  );
}
