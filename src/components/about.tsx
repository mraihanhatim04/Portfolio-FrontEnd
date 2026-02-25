import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Laptop, Rocket, Target, Zap } from "lucide-react"
import { useRef, useEffect, useState } from "react"

const highlights = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Career Focus",
    description:
      "Dedicated to crafting high-performance, accessible, and user-centric web applications with modern technologies.",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Continuous Growth",
    description:
      "Always exploring new frameworks and best practices to stay at the forefront of front-end development.",
  },
  {
    icon: <Laptop className="h-6 w-6" />,
    title: "Tech Specialization",
    description:
      "Deep expertise in React ecosystem, TypeScript, and modern styling solutions like Tailwind CSS.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Performance",
    description:
      "Focused on building lightweight and fast-loading applications that provide a seamless user experience.",
  },
]

const stats = [
  { label: "Projects Built", value: 10 },
  { label: "Technologies", value: 15 },
  { label: "Years Coding", value: 2 },
]

function AnimatedCounter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const step = value / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, value, duration])

  return <span ref={ref}>{count}+</span>
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

export function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block text-sm font-bold tracking-widest text-accent uppercase">
            Who I Am
          </span>
          <h2 className="text-4xl font-[800] tracking-tighter font-[family-name:var(--font-display)] sm:text-5xl md:text-6xl">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        {/* Anti-grid: Asymmetric Layout */}
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Left Column: Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-2xl font-bold mb-6 font-[family-name:var(--font-display)]">
              A Brief <span className="gradient-text">Background</span>
            </h3>

            <div className="space-y-5">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a results-driven{" "}
                <span className="text-foreground font-semibold">Front-End Developer</span>{" "}
                with a strong foundation in building responsive and interactive web
                applications. My journey in tech is fueled by a passion for clean code and
                intuitive design.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in creating modern web experiences that are not only visually
                stunning but also highly functional and accessible. With experience ranging
                from corporate internships to intensive developer camps, I bring a
                well-rounded perspective to every project.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Responsive Design",
                "UI/UX Best Practices",
                "Clean Code",
                "Modern Architecture",
              ].map((tag) => (
                <span
                  key={tag}
                  className="gradient-border rounded-full bg-accent/5 px-4 py-1.5 text-sm font-medium text-accent backdrop-blur-sm transition-all hover:bg-accent/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Animated Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-[800] font-[family-name:var(--font-display)] gradient-text">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Highlight Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {highlights.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group h-full glass-card border-accent/10 transition-all duration-300 hover:border-accent/30 hover:glow-sm tilt-card">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-bold mb-2 font-[family-name:var(--font-display)]">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
