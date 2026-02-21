import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, GraduationCap } from "lucide-react"

const experiences = [
  {
    title: "Front-End Developer (Trainee)",
    company: "Enigma Camp",
    duration: "2024 - Present",
    description: "Intensive training program focused on full-stack development with a heavy emphasis on modern front-end technologies and industry-standard practices.",
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
    duration: "2023 - 2024",
    description: "Contributed to the development of internal tools and client projects, focusing on building responsive and accessible user interfaces.",
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
    duration: "2023",
    description: "Selected participant for an intensive program focused on specialized tech topics, collaborating with industry mentors.",
    achievements: [
      "Developed a capstone project using modern web frameworks.",
      "Collaborated with diverse teams to solve complex coding challenges.",
      "Received recognition for outstanding project performance.",
    ],
    tech: ["Web Development", "Team Collaboration", "Problem Solving"],
    type: "education",
  },
  {
    title: "Active Member",
    company: "Google Developer Student Club",
    duration: "2022 - 2023",
    description: "Engaged in community-driven tech workshops and collaborative projects, fostering technical and soft skills.",
    achievements: [
      "Participated in Hackathons and coding competitions.",
      "Attended workshops on Google Cloud and Android development.",
      "Contributed to open-source student projects.",
    ],
    tech: ["Tech Community", "Workshops", "Collaboration"],
    type: "education",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            My <span className="text-accent">Experience</span>
          </h2>
          <div className="mt-4 mx-auto h-1 w-20 bg-accent rounded-full" />
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-accent/20 sm:left-1/2 sm:-translate-x-1/2" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col sm:flex-row ${
                  index % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Dot on timeline */}
                <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-background border-4 border-accent sm:left-1/2">
                  {exp.type === "work" ? (
                    <Briefcase className="h-4 w-4 text-accent" />
                  ) : (
                    <GraduationCap className="h-4 w-4 text-accent" />
                  )}
                </div>

                {/* Content Card */}
                <div className={`ml-12 sm:ml-0 sm:w-1/2 ${
                  index % 2 === 0 ? "sm:pl-16" : "sm:pr-16"
                }`}>
                  <div className="rounded-2xl border border-accent/10 bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
                    <div className="mb-2 flex items-center justify-between flex-wrap gap-2">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <span className="flex items-center gap-1 text-sm font-medium text-muted-foreground whitespace-nowrap">
                        <Calendar className="h-3 w-3" />
                        {exp.duration}
                      </span>
                    </div>
                    <h4 className="mb-4 text-md font-semibold text-accent">{exp.company}</h4>
                    <p className="mb-4 text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    <ul className="mb-6 space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <Badge key={t} variant="secondary" className="bg-accent/5 text-accent border-accent/10 text-[10px] uppercase tracking-wider">
                          {t}
                        </Badge>
                      ))}
                    </div>
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
