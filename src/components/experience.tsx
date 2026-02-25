import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, GraduationCap } from "lucide-react"

const experiences = [
  {
    title: "Front-End Developer (Trainee)",
    company: "Enigma Camp",
    duration: "2024",
    description:
      "Intensive training program focused on full-stack development with a heavy emphasis on modern front-end technologies and industry-standard practices.",
    achievements: [
      "Mastered React.js and TypeScript for scalable application development.",
      "Implemented state management solutions and optimized performance.",
      "Collaborated in agile teams to deliver production-ready features.",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    type: "work",
  },
  {
    title: "Front-End Developer Intern",
    company: "PT Presentologics",
    duration: "2022",
    description:
      "Contributed to the development of internal tools and client projects, focusing on building responsive and accessible user interfaces.",
    achievements: [
      "Developed reusable UI components across multiple projects.",
      "Improved website accessibility scores by 30%.",
      "Assisted in refactoring legacy code to modern React standards.",
    ],
    tech: ["React", "JavaScript", "Styled Components", "Git"],
    type: "work",
  },
  {
    title: "Studi Independent",
    company: "Kampus Merdeka",
    duration: "2022",
    description:
      "Selected participant for an intensive program focused on specialized tech topics, collaborating with industry mentors.",
    achievements: [
      "Developed a capstone project using modern web frameworks.",
      "Collaborated with diverse teams to solve complex coding challenges.",
      "Received recognition for outstanding project performance.",
    ],
    tech: ["Web Development", "Team Collaboration", "Problem Solving"],
    type: "education",
  },
  {
    title: "Self Development - Member",
    company: "Google Developer Student Club UNIKOM",
    duration: "2021 - 2022",
    description:
      "Engaged in community-driven tech workshops and collaborative projects, fostering technical and soft skills.",
    achievements: [
      "Contributed to open-source student projects.",
    ],
    tech: ["Tech Community", "Workshops", "Collaboration"],
    type: "education",
  },
]

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

const cardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -60 : 60,
    scale: 0.9,
  }),
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

const badgeContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.3 },
  },
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

export function Experience() {
  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 h-[400px] w-[400px] rounded-full bg-[oklch(0.65_0.20_195/0.05)] blur-[120px]" />
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
            My Journey
          </span>
          <h2 className="text-4xl font-[800] tracking-tighter font-[family-name:var(--font-display)] sm:text-5xl md:text-6xl">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          {/* Animated Glowing Vertical Line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute left-4 top-0 h-full w-0.5 origin-top sm:left-1/2 sm:-translate-x-1/2"
          >
            <div className="h-full w-full bg-gradient-to-b from-accent via-[var(--accent-secondary)] to-accent/20 rounded-full" />
            {/* Glow overlay */}
            <div className="absolute inset-0 w-full bg-gradient-to-b from-accent via-[var(--accent-secondary)] to-accent/20 rounded-full blur-sm opacity-50" />
          </motion.div>

          <div className="space-y-14">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className={`relative flex flex-col sm:flex-row ${
                  index % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                  className="absolute left-4 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-background border-2 border-accent sm:left-1/2 z-10"
                >
                  <div className="absolute inset-0 rounded-full bg-accent/20 animate-glow-pulse" />
                  {exp.type === "work" ? (
                    <Briefcase className="h-4 w-4 text-accent" />
                  ) : (
                    <GraduationCap className="h-4 w-4 text-accent" />
                  )}
                </motion.div>

                {/* Content Card */}
                <div
                  className={`ml-14 sm:ml-0 sm:w-1/2 ${
                    index % 2 === 0 ? "sm:pl-16" : "sm:pr-16"
                  }`}
                >
                  <div className="group glass-card rounded-2xl p-6 transition-all duration-300 hover:border-accent/30 hover:glow-sm">
                    <div className="mb-3 flex items-center justify-between flex-wrap gap-2">
                      <h3 className="text-xl font-bold font-[family-name:var(--font-display)]">
                        {exp.title}
                      </h3>
                      <span className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground whitespace-nowrap">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.duration}
                      </span>
                    </div>
                    <h4 className="mb-4 text-md font-semibold gradient-text">
                      {exp.company}
                    </h4>
                    <p className="mb-4 text-muted-foreground leading-relaxed text-sm">
                      {exp.description}
                    </p>
                    <ul className="mb-6 space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-accent to-[var(--accent-secondary)]" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <motion.div
                      variants={badgeContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-2"
                    >
                      {exp.tech.map((t) => (
                        <motion.div key={t} variants={badgeVariants}>
                          <Badge
                            variant="secondary"
                            className="gradient-border bg-accent/5 text-accent text-[10px] uppercase tracking-wider font-semibold"
                          >
                            {t}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
