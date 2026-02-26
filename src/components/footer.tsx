import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";

const footerLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
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
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-accent/10 bg-background overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1px w-full max-w-5xl bg-linear-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 h-64 w-[70%] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-3 lg:items-start">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#hero"
              className="text-xl font-bold font-display tracking-tighter"
            >
              MRaihan<span className="gradient-text">Hatim</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Engineering high-performance web experiences with{" "}
              <span className="text-foreground/80 font-medium">precision</span>{" "}
              and{" "}
              <span className="gradient-text font-medium italic">purpose</span>.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-accent py-1"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-accent transition-all duration-300 group-hover:w-3" />
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social & Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-start lg:items-end gap-6"
          >
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-4 lg:text-right">
                Connect
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 w-10 rounded-full glass-card text-muted-foreground transition-all duration-300 hover:text-accent hover:border-accent/30 hover:glow-sm hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 rounded-full glass-card px-4 py-2 text-sm text-muted-foreground transition-all duration-300 hover:text-accent hover:border-accent/30 hover:glow-sm"
            >
              <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
              Back to top
            </button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-accent/5 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Muhammad Raihan Hatim. All rights reserved.
          </p>
          <div className="text-xs text-muted-foreground flex items-center gap-1.5">
            Crafted with{" "}
            <Heart className="h-3 w-3 text-red-500 animate-pulse" /> using React
            & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
}
