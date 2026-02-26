import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    title: "Warungku - POS System",
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
  hidden: { opacity: 0, y: 50, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
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
            My Work
          </span>
          <h2 className="text-4xl font-extrabold tracking-tighter font-display sm:text-5xl md:text-6xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-6xl grid gap-6 grid-cols-1 sm:grid-cols-2"
        >
          {projects.map((project, index) => {
            const isFeatured = project.featured;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`group relative`}
              >
                <div className="relative h-full glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:border-accent/30 hover:glow-sm">
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      <p className="text-sm text-white/80 line-clamp-2 mb-3">
                        {project.description}
                      </p>
                      <Button
                        size="sm"
                        className="w-fit rounded-full bg-white/20 text-white backdrop-blur-md border border-white/20 hover:bg-white/30 gap-2"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Live Demo
                        </a>
                      </Button>
                    </div>

                    {/* Featured badge */}
                    {isFeatured && (
                      <div className="absolute top-3 right-3 rounded-full bg-accent/90 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider backdrop-blur-sm">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold font-display transition-colors group-hover:gradient-text">
                        {project.title}
                      </h3>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center h-8 w-8 rounded-full bg-accent/10 text-accent transition-all duration-300 hover:bg-accent hover:text-white hover:scale-110"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, isFeatured ? 5 : 3).map((t) => (
                        <Badge
                          key={t}
                          variant="secondary"
                          className="bg-accent/5 text-accent/80 border-accent/10 text-[10px] uppercase tracking-wider"
                        >
                          {t}
                        </Badge>
                      ))}
                      {project.tech.length > (isFeatured ? 5 : 3) && (
                        <Badge
                          variant="secondary"
                          className="bg-accent/5 text-accent/80 border-accent/10 text-[10px]"
                        >
                          +{project.tech.length - (isFeatured ? 5 : 3)}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
