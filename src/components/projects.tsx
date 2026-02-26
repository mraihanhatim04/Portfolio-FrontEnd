import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import storeslicing from "@/assets/projects/storeslicing.png";
import warungku from "@/assets/projects/warungku.png";
import brainwave from "@/assets/projects/brainwave.png";
import hooBank from "@/assets/projects/hoobank.png";
import portfolioWebsite from "@/assets/projects/portfolio.png";
import dashboardAdmin from "@/assets/projects/DashboardAdmin.png";

const projects = [
  {
    title: "E-Commerce",
    description:
      "A modern e-commerce platform with a focus on clean UI/UX, product categories, and seamless shopping experience.",
    image: storeslicing,
    tech: ["Html", "Tailwind CSS", "Css", "Javascript", "Sass"],
    demo: "https://storeslicing-bwa.vercel.app/",
    featured: false,
  },
  {
    title: "POS System",
    description:
      "A comprehensive Inventory management application designed for small businesses to track sales and stock efficiently.",
    image: warungku,
    tech: ["React", "Supabase", "Tailwind CSS"],
    demo: "https://warungku-nu.vercel.app/",
    featured: true,
  },
  {
    title: "Brainwave - AI Landing Page",
    description:
      "A futuristic AI-themed landing page showcasing modern design trends, complex layouts, and interactive elements.",
    image: brainwave,
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    demo: "https://brainwave-inky-omega.vercel.app/",
    featured: true,
  },
  {
    title: "HooBank",
    description:
      "A sleek and modern banking application UI featuring a professional look, responsive design, and intuitive user navigation.",
    image: hooBank,
    tech: ["React", "Tailwind CSS", "Vite"],
    demo: "https://hoobank-six-tau.vercel.app/",
    featured: false,
  },

  {
    title: "Admin Dashboard",
    description:
      "A modern and responsive admin dashboard for managing the website and the products.",
    image: dashboardAdmin,
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "React Query",
      "Recharts",
      "Axios",
    ],
    demo: "https://dashboard-admin-nine-phi.vercel.app/",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern and responsive portfolio website for showcasing my projects and skills.",
    image: portfolioWebsite,
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Framer-motion"],
    demo: "https://mraihanhatim-frontend.netlify.app/",
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export function Projects() {
  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[160px]" />
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
            My Portfolio
          </span>
          <h2 className="text-4xl font-extrabold tracking-tighter font-display sm:text-5xl md:text-6xl mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="h-1.5 w-24 bg-linear-to-r from-accent to-accent-secondary mx-auto rounded-full opacity-60" />
        </motion.div>

        {/* Project List (Unified for all projects) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-5xl space-y-4"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="glass-card rounded-2xl p-5 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 hover:border-accent/40 hover:glow-sm hover:translate-x-1 translate-z-0">
                  <div className="flex items-center gap-6">
                    <span className="hidden sm:block text-sm font-bold text-accent/30 font-mono">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold font-display group-hover:gradient-text transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2 md:line-clamp-1 max-w-2xl">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
                        {project.tech.map((t) => (
                          <span key={t} className="text-[10px] uppercase tracking-widest text-accent/60 font-medium">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 border-accent/10 pt-4 md:pt-0 mt-2 md:mt-0">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/5 text-accent text-xs font-bold uppercase tracking-wider group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      View Live
                      <ExternalLink className="h-3.5 w-3.5" />
                    </div>
                    <div className="hidden sm:flex h-10 w-10 rounded-full border border-accent/20 items-center justify-center text-accent/40 group-hover:border-accent group-hover:text-accent transition-all duration-300 transform group-hover:rotate-12 translate-z-0">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

