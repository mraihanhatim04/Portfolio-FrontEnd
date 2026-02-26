import { motion } from "framer-motion";

type Skill = {
  name: string;
  logoType: "brand" | "icon";
  imageUrl?: string;
  theme?: "light" | "dark";
};

const skills: Skill[] = [
  {
    name: "HTML",
    logoType: "brand",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    theme: "light",
  },
  {
    name: "CSS",
    logoType: "brand",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    theme: "light",
  },
  {
    name: "JavaScript",
    logoType: "brand",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    theme: "light",
  },
  {
    name: "TypeScript",
    logoType: "brand",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    theme: "light",
  },
  {
    name: "React.js",
    logoType: "brand",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    theme: "light",
  },
  {
    name: "Next.js",
    logoType: "brand",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    theme: "light",
  },
  {
    name: "Tailwind CSS",
    logoType: "brand",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    theme: "light",
  },
  {
    name: "TanStack Query",
    logoType: "brand",
    imageUrl: "https://avatars.githubusercontent.com/u/72518640?s=200&v=4",
    theme: "light",
  },
  {
    name: "Zustand",
    logoType: "brand",
    imageUrl: "https://zustand-demo.pmnd.rs/favicon.ico",
    theme: "light",
  },
  {
    name: "shadcn/ui",
    logoType: "brand",
    imageUrl: "https://ui.shadcn.com/favicon.ico",
    theme: "dark",
  },
  {
    name: "NextUI",
    logoType: "brand",
    imageUrl: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4",
    theme: "light",
  },
  {
    name: "REST API",
    logoType: "brand",
    imageUrl:
      "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    theme: "light",
  },
  {
    name: "Node.js",
    logoType: "brand",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    theme: "dark",
  },
  {
    name: "Express.js",
    logoType: "brand",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    theme: "light",
  },
  {
    name: "Supabase",
    logoType: "brand",
    imageUrl: "https://avatars.githubusercontent.com/u/54469796?s=200&v=4",
    theme: "dark",
  },
  {
    name: "MySQL",
    logoType: "brand",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    theme: "light",
  },
  {
    name: "Axios",
    logoType: "brand",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg",
    theme: "light",
  },
  {
    name: "PostgreSQL",
    logoType: "brand",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    theme: "light",
  },
  {
    name: "Git",
    logoType: "brand",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    theme: "light",
  },
  {
    name: "GitHub",
    logoType: "brand",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    theme: "dark",
  },
  {
    name: "Cursor AI Agent",
    logoType: "brand",
    imageUrl: "https://cursor.com/favicon.ico",
    theme: "light",
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[oklch(0.65_0.20_195/0.05)] blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="mb-4 inline-block text-sm font-bold tracking-widest text-accent uppercase">
            Tech Stack
          </span>
          <h2 className="text-4xl font-extrabold tracking-tighter font-display sm:text-5xl md:text-6xl">
            Tools & <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-10 max-w-4xl"
        >
          <div className="grid grid-cols-5 gap-6 justify-items-center sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12">
            {skills.map((skill) => (
              <motion.button
                key={skill.name}
                whileHover={{ scale: 1.08, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex h-16 w-16 items-center justify-center rounded-2xl transition-all"
                aria-label={skill.name}
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all group-hover:scale-105 group-hover:-translate-y-0.5 ${
                    skill.theme === "dark"
                      ? "bg-black border-zinc-800"
                      : "bg-white border-zinc-200"
                  }`}
                >
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    loading="lazy"
                    className="h-9 w-9 object-contain"
                  />
                </div>
                <span className="pointer-events-none absolute -bottom-6 translate-y-2 rounded-full bg-background px-2 py-0.5 text-[10px] font-medium text-muted-foreground opacity-0 shadow-sm ring-1 ring-border/60 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  {skill.name}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
