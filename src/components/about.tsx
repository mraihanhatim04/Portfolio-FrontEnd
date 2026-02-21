import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Laptop, Rocket, Target, Zap } from "lucide-react"

const highlights = [
  {
    icon: <Target className="h-6 w-6 text-accent" />,
    title: "Career Focus",
    description: "Dedicated to crafting high-performance, accessible, and user-centric web applications with modern technologies.",
  },
  {
    icon: <Rocket className="h-6 w-6 text-accent" />,
    title: "Continuous Growth",
    description: "Always exploring new frameworks and best practices to stay at the forefront of front-end development.",
  },
  {
    icon: <Laptop className="h-6 w-6 text-accent" />,
    title: "Tech Specialization",
    description: "Deep expertise in React ecosystem, TypeScript, and modern styling solutions like Tailwind CSS.",
  },
  {
    icon: <Zap className="h-6 w-6 text-accent" />,
    title: "Performance",
    description: "Focused on building lightweight and fast-loading applications that provide a seamless user experience.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="mt-4 mx-auto h-1 w-20 bg-accent rounded-full" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">A Brief Background</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I am a results-driven <span className="text-foreground font-medium">Front-End Developer</span> with a strong 
              foundation in building responsive and interactive web applications. My journey in tech is fueled by 
              a passion for clean code and intuitive design.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I specialize in creating modern web experiences that are not only visually stunning but also 
              highly functional and accessible. With experience ranging from corporate internships to 
              intensive developer camps, I bring a well-rounded perspective to every project.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {["Responsive Design", "UI/UX Best Practices", "Clean Code", "Modern Architecture"].map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-sm font-medium text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {highlights.map((item, index) => (
              <Card key={index} className="border-none shadow-md bg-background/50 backdrop-blur-sm transition-transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4 inline-block p-3 bg-accent/10 rounded-xl">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
