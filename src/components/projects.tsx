import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import storeslicing from "@/assets/projects/storeslicing.png";
import warungku from "@/assets/projects/warungku.png";
import brainwave from "@/assets/projects/brainwave.png";
import hooBank from "@/assets/projects/hoobank.png";
import portfolioWebsite from "@/assets/projects/portfolio.png";
import dashboardAdmin from "@/assets/projects/DashboardAdmin.png";

const projects = [
  {
    title: "SCommerce",
    description:
      "A modern e-commerce platform with a focus on clean UI/UX, product categories, and seamless shopping experience.",
    image: storeslicing,
    tech: ["Html", "Tailwind CSS", "Css", "Javascript", "Sass"],
    demo: "https://storeslicing-bwa.vercel.app/",
  },
  {
    title: "Warungku - POS System",
    description:
      "A comprehensive Inventory management application designed for small businesses to track sales and stock efficiently.",
    image: warungku,
    tech: ["React", "Supabase", "Tailwind CSS"],
    demo: "https://warungku-nu.vercel.app/",
  },
  {
    title: "Brainwave - AI Landing Page",
    description:
      "A futuristic AI-themed landing page showcasing modern design trends, complex layouts, and interactive elements.",
    image: brainwave,
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    demo: "https://brainwave-inky-omega.vercel.app/",
  },
  {
    title: "HooBank - Modern Banking Landing Page",
    description:
      "A sleek and modern banking application UI featuring a professional look, responsive design, and intuitive user navigation.",
    image: hooBank,
    tech: ["React", "Tailwind CSS", "Vite"],
    demo: "https://hoobank-six-tau.vercel.app/",
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
  },
  {
    title: "Portfolio Website",
    description:
      "A modern and responsive portfolio website for showcasing my projects and skills.",
    image: portfolioWebsite,
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Framer-motion"],
    demo: "https://mraihanhatim-frontend.netlify.app/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <div className="mt-4 mx-auto h-1 w-20 bg-accent rounded-full" />
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border-accent/10 bg-muted/5 transition-all hover:bg-muted/10 hover:shadow-xl">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-accent/20 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold transition-colors group-hover:text-accent">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-md leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="bg-accent/5 text-accent border-accent/10"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-4">
                  <Button size="sm" className="gap-2" asChild>
                    <a href={project.demo} target="_blank">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
