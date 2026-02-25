import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Send, MapPin, ArrowUpRight } from "lucide-react"

const contactLinks = [
  {
    icon: <Mail className="h-6 w-6" />,
    label: "Email",
    value: "raihanhatim.01@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=raihanhatim.01@gmail.com",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: <Linkedin className="h-6 w-6" />,
    label: "LinkedIn",
    value: "mraihanhatim",
    href: "https://www.linkedin.com/in/mraihanhatim/",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Github className="h-6 w-6" />,
    label: "GitHub",
    value: "mraihanhatim04",
    href: "https://github.com/mraihanhatim04",
    color: "from-purple-500 to-violet-500",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
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

export function Contact() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-accent/5 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-[oklch(0.65_0.20_195/0.05)] blur-[100px]" />
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
            Get In Touch
          </span>
          <h2 className="text-4xl font-[800] tracking-tighter font-[family-name:var(--font-display)] sm:text-5xl md:text-6xl">
            Let's Build Something{" "}
            <span className="gradient-text">Amazing</span>
          </h2>
          <p className="mt-6 mx-auto max-w-xl text-lg text-muted-foreground">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          {/* Conversational-style layout */}
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Left: Conversation bubble style */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              {/* Chat bubble */}
              <div className="glass-card rounded-2xl rounded-tl-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent to-[var(--accent-secondary)] flex items-center justify-center text-white font-bold text-sm">
                    RH
                  </div>
                  <div>
                    <p className="font-semibold text-sm font-[family-name:var(--font-display)]">
                      Muhammad Raihan Hatim
                    </p>
                    <p className="text-xs text-muted-foreground">Front-End Developer</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Hey there! 👋 I'm currently focused on building amazing web
                  experiences. Whether you have a project idea, want to
                  collaborate, or just want to say hi — don't hesitate to reach
                  out!
                </p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground ml-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Jakarta, Indonesia</span>
                <span className="ml-2 flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-500 text-xs font-medium">
                    Available for work
                  </span>
                </span>
              </div>
            </motion.div>

            {/* Right: Contact Methods */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {contactLinks.map((link) => (
                <motion.a
                  key={link.label}
                  variants={itemVariants}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 glass-card rounded-2xl p-5 transition-all duration-300 hover:border-accent/30 hover:glow-sm"
                >
                  <div
                    className={`flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br ${link.color} text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                      {link.label}
                    </p>
                    <p className="font-medium font-[family-name:var(--font-display)]">
                      {link.value}
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.a>
              ))}

              {/* CTA Button */}
              <motion.div variants={itemVariants}>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=raihanhatim.01@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-accent to-[var(--accent-secondary)] p-4 text-white font-bold transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Send className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12" />
                  <span className="font-[family-name:var(--font-display)]">
                    Send Me a Message
                  </span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
