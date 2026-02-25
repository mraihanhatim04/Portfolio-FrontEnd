import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import {
  Code2,
  Smartphone,
  Settings2,
  Users2,
  Globe,
  Palette,
  Layers,
  Atom,
  Blocks,
  Wind,
  Zap,
  Plug,
  FileCode,
  FileType,
  GitBranch,
  Package,
  Bot,
  MessageCircle,
  Lightbulb,
} from "lucide-react"

const skillCategories = [
  {
    title: "Front-End",
    icon: <Code2 className="h-5 w-5" />,
    color: "from-violet-500 to-purple-600",
    skills: [
      { name: "Html, Css, Javascript", icon: <FileCode className="h-4 w-4" /> },
      { name: "React.Js", icon: <Atom className="h-4 w-4" /> },
      { name: "TypeScript", icon: <FileType className="h-4 w-4" /> },
      { name: "Next.Js", icon: <Globe className="h-4 w-4" /> },
      { name: "Rest API", icon: <Plug className="h-4 w-4" /> },
    ],
  },
  {
    title: "Styling & UI",
    icon: <Palette className="h-5 w-5" />,
    color: "from-cyan-500 to-teal-500",
    skills: [
      { name: "Tailwind CSS", icon: <Wind className="h-4 w-4" /> },
      { name: "Shadcn UI", icon: <Blocks className="h-4 w-4" /> },
      { name: "Next UI", icon: <Layers className="h-4 w-4" /> },
      { name: "Responsive Design", icon: <Smartphone className="h-4 w-4" /> },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: <Settings2 className="h-5 w-5" />,
    color: "from-amber-500 to-orange-500",
    skills: [
      { name: "Git / GitHub", icon: <GitBranch className="h-4 w-4" /> },
      { name: "npm / pnpm / yarn", icon: <Package className="h-4 w-4" /> },
      { name: "VScode", icon: <Code2 className="h-4 w-4" /> },
      { name: "AI Agents", icon: <Bot className="h-4 w-4" /> },
    ],
  },
  {
    title: "Soft Skills",
    icon: <Users2 className="h-5 w-5" />,
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "Teamwork", icon: <Users2 className="h-4 w-4" /> },
      { name: "Communication", icon: <MessageCircle className="h-4 w-4" /> },
      { name: "Problem Solving", icon: <Lightbulb className="h-4 w-4" /> },
      { name: "Adaptability", icon: <Zap className="h-4 w-4" /> },
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

export function Skills() {
  const [activeTab, setActiveTab] = useState(0)

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
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-bold tracking-widest text-accent uppercase">
            What I Know
          </span>
          <h2 className="text-4xl font-[800] tracking-tighter font-[family-name:var(--font-display)] sm:text-5xl md:text-6xl">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {skillCategories.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(i)}
              className={`group relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeTab === i
                  ? "text-white shadow-lg shadow-accent/25"
                  : "glass-card text-muted-foreground hover:text-foreground hover:border-accent/30"
              }`}
            >
              {activeTab === i && (
                <motion.div
                  layoutId="skill-tab-bg"
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${cat.color}`}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {cat.icon}
                {cat.title}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className="mx-auto max-w-4xl grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {skillCategories[activeTab].skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                className="group glass-card rounded-2xl p-4 transition-all duration-300 hover:border-accent/30 hover:glow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className={`flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br ${skillCategories[activeTab].color} text-white shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    {skill.icon}
                  </div>
                  <span className="font-semibold font-[family-name:var(--font-display)]">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* All Skills Overview — Compact hexagonal badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 mx-auto max-w-3xl"
        >
          <p className="text-center text-sm text-muted-foreground mb-6">
            All technologies I work with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {skillCategories.flatMap((cat) =>
              cat.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="gradient-border rounded-full bg-accent/5 px-3 py-1 text-xs font-medium text-muted-foreground transition-all hover:text-accent hover:bg-accent/10"
                >
                  {skill.name}
                </span>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
