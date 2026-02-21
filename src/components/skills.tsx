import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Code2, 
  Layout, 
  Settings2, 
  Users2, 
  Globe, 
  Cpu, 
  Palette, 
  Terminal,
  Layers,
  Component,
  Framer,
  Wind
} from "lucide-react"

const skillCategories = [
  {
    title: "Front-End",
    icon: <Code2 className="h-6 w-6 text-accent" />,
    skills: [
      { name: "React / Vite", icon: <Component className="h-4 w-4" />, level: 90 },
      { name: "TypeScript", icon: <Code2 className="h-4 w-4" />, level: 85 },
      { name: "Next.Js", icon: <Globe className="h-4 w-4" />, level: 95 },
      { name: "HTML5 / CSS3", icon: <Layout className="h-4 w-4" />, level: 95 },
    ],
  },
  {
    title: "Styling & UI",
    icon: <Palette className="h-6 w-6 text-accent" />,
    skills: [
      { name: "Tailwind CSS", icon: <Wind className="h-4 w-4" />, level: 95 },
      { name: "Shadcn UI", icon: <Layers className="h-4 w-4" />, level: 90 },
      { name: "Next UI", icon: <Framer className="h-4 w-4" />, level: 80 },
      { name: "Responsive Design", icon: <Layout className="h-4 w-4" />, level: 95 },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: <Settings2 className="h-6 w-6 text-accent" />,
    skills: [
      { name: "Git / GitHub", icon: <Terminal className="h-4 w-4" />, level: 85 },
      { name: "npm / pnpm / yarn", icon: <Settings2 className="h-4 w-4" />, level: 90 },
      { name: "VScode", icon: <Code2 className="h-4 w-4" />, level: 95 },
      { name: "AI Agents", icon: <Settings2 className="h-4 w-4" />, level: 85 },
    ],
  },
  {
    title: "Soft Skills",
    icon: <Users2 className="h-6 w-6 text-accent" />,
    skills: [
      { name: "Teamwork", icon: <Users2 className="h-4 w-4" />, level: 95 },
      { name: "Communication", icon: <Users2 className="h-4 w-4" />, level: 90 },
      { name: "Problem Solving", icon: <Cpu className="h-4 w-4" />, level: 90 },
      { name: "Adaptability", icon: <Zap className="h-4 w-4" />, level: 90 },
    ],
  },
]

import { Zap } from "lucide-react"

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <div className="mt-4 mx-auto h-1 w-20 bg-accent rounded-full" />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
            >
              <Card className="h-full border-accent/10 bg-muted/5 backdrop-blur-sm transition-all hover:bg-muted/10">
                <CardContent className="p-6">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      {category.icon}
                    </div>
                    <h3 className="font-bold text-lg">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-5">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="flex items-center gap-2 font-medium">
                            {skill.icon}
                            {skill.name}
                          </span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-accent/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 + catIndex * 0.1 }}
                            className="h-full bg-accent rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
