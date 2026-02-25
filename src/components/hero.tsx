import { animated, useSpring, useTrail, config } from "@react-spring/web"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail  } from "lucide-react"
import { useState, useEffect, useMemo } from "react"

const roles = ["Front-End Developer", "UI/UX Enthusiast", "React Specialist", "Web Architect"]

export function Hero() {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  // Mouse parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex]
    const speed = isDeleting ? 40 : 80

    if (!isDeleting && displayText === current) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000)
      return () => clearTimeout(timeout)
    }
    if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting ? current.substring(0, displayText.length - 1) : current.substring(0, displayText.length + 1)
      )
    }, speed)
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  // Parallax springs
  const parallaxSpring = useSpring({
    x: coords.x,
    y: coords.y,
    config: { mass: 1, tension: 120, friction: 60 },
  })

  // Content trail animation
  const content = [
    { type: "badge" },
    { type: "heading" },
    { type: "typewriter" },
    { type: "description" },
    { type: "ctas" },
  ]

  const trail = useTrail(content.length, {
    from: { opacity: 0, y: 50, scale: 0.96 },
    to: { opacity: 1, y: 0, scale: 1 },
    config: config.gentle,
    delay: 400,
  })

  // Animated orbs
  const orb1 = useSpring({
    from: { x: 0, y: 0, scale: 1 },
    to: async (next) => {
      while (true) {
        await next({ x: 60, y: 40, scale: 1.15 })
        await next({ x: 0, y: 0, scale: 1 })
      }
    },
    config: { duration: 10000 },
  })

  const orb2 = useSpring({
    from: { x: 0, y: 0, scale: 1 },
    to: async (next) => {
      while (true) {
        await next({ x: -60, y: -50, scale: 1.25 })
        await next({ x: 0, y: 0, scale: 1 })
      }
    },
    config: { duration: 13000 },
  })

  const orb3 = useSpring({
    from: { x: 0, y: 0, scale: 1 },
    to: async (next) => {
      while (true) {
        await next({ x: 30, y: -30, scale: 1.1 })
        await next({ x: -20, y: 20, scale: 0.95 })
        await next({ x: 0, y: 0, scale: 1 })
      }
    },
    config: { duration: 15000 },
  })

  // Heading letters for stagger animation
  const headingLine1 = "Crafting"
  const headingLine2 = "Digital Futures"
  const letters1 = useMemo(() => headingLine1.split(""), [])
  const letters2 = useMemo(() => headingLine2.split(""), [])

  const letterTrail1 = useTrail(letters1.length, {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    config: { tension: 200, friction: 20 },
    delay: 600,
  })

  const letterTrail2 = useTrail(letters2.length, {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    config: { tension: 200, friction: 20 },
    delay: 900,
  })

  // Particles
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 2 + Math.random() * 3,
        delay: Math.random() * 12,
        duration: 8 + Math.random() * 10,
      })),
    []
  )

  return (
    <section
      id="hero"
      className="noise-bg relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      {/* Grid Layer */}
      <animated.div
        style={{
          transform: parallaxSpring.x.to(
            (x) => `translate3d(${x * 0.2}px, ${parallaxSpring.y.get() * 0.2}px, 0)`
          ),
        }}
        className="grid-background absolute inset-0 -z-20 opacity-50"
      />

      {/* Glowing Orbs */}
      <div className="absolute inset-0 -z-10">
        <animated.div
          style={{
            transform: orb1.x.to(
              (x) => `translate3d(${x}px, ${orb1.y.get()}px, 0) scale(${orb1.scale.get()})`
            ),
          }}
          className="absolute -top-[10%] -left-[5%] h-[50%] w-[50%] rounded-full bg-[oklch(0.55_0.28_270/0.15)] blur-[120px]"
        />
        <animated.div
          style={{
            transform: orb2.x.to(
              (x) => `translate3d(${x}px, ${orb2.y.get()}px, 0) scale(${orb2.scale.get()})`
            ),
          }}
          className="absolute -bottom-[15%] -right-[10%] h-[55%] w-[55%] rounded-full bg-[oklch(0.65_0.20_195/0.12)] blur-[140px]"
        />
        <animated.div
          style={{
            transform: orb3.x.to(
              (x) => `translate3d(${x}px, ${orb3.y.get()}px, 0) scale(${orb3.scale.get()})`
            ),
          }}
          className="absolute top-[20%] right-[15%] h-[35%] w-[35%] rounded-full bg-[oklch(0.60_0.24_300/0.10)] blur-[100px]"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-accent/40 animate-particle"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Elements */}
      <div className="pointer-events-none absolute inset-0 -z-5 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-accent/15 animate-float opacity-10"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
              width: `${20 + i * 12}px`,
              height: `${20 + i * 12}px`,
              borderRadius: i % 3 === 0 ? "50%" : i % 3 === 1 ? "4px" : "30%",
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${6 + i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container relative z-20 mx-auto px-4 text-center sm:px-6 lg:px-8 pt-20">
        <div className="mx-auto max-w-5xl">
          {/* Badge */}
          <animated.div style={trail[0]} className="mb-8 flex justify-center">
            <div className="gradient-border inline-flex items-center gap-2.5 rounded-full bg-accent/5 px-5 py-2.5 text-sm font-bold tracking-widest text-accent backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>OPEN TO OPPORTUNITIES</span>
            </div>
          </animated.div>

          {/* Kinetic Heading */}
          <animated.div style={trail[1]} className="mb-4">
            <h1 className="text-6xl font-[800] tracking-tighter font-[family-name:var(--font-display)] sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85]">
              <span className="block">
                {letterTrail1.map((style, i) => (
                  <animated.span key={i} style={style} className="inline-block">
                    {letters1[i] === " " ? "\u00A0" : letters1[i]}
                  </animated.span>
                ))}
              </span>
              <span className="block mt-2">
                {letterTrail2.map((style, i) => (
                  <animated.span
                    key={i}
                    style={style}
                    className="inline-block gradient-text"
                  >
                    {letters2[i] === " " ? "\u00A0" : letters2[i]}
                  </animated.span>
                ))}
              </span>
            </h1>
          </animated.div>

          {/* Typewriter Role */}
          <animated.div style={trail[2]} className="mb-6 flex justify-center">
            <span className="text-xl text-muted-foreground font-medium font-[family-name:var(--font-display)] sm:text-2xl">
              {"< "}
              <span className="text-accent">{displayText}</span>
              <span className="animate-pulse text-accent ml-0.5">|</span>
              {" />"}
            </span>
          </animated.div>

          {/* Description */}
          <animated.p
            style={trail[3]}
            className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground/80 sm:text-xl leading-relaxed"
          >
            I am{" "}
            <span className="text-foreground font-semibold">Muhammad Raihan Hatim</span>,
            bridging the gap between{" "}
            <span className="gradient-text font-medium italic">complex architecture</span>{" "}
            and <span className="text-foreground/90 font-medium">minimalist design</span>.
          </animated.p>

          {/* CTAs */}
          <animated.div
            style={trail[4]}
            className="flex flex-col items-center justify-center gap-6 sm:flex-row"
          >
            <Button
              size="lg"
              className="group relative h-12 rounded-full px-8 text-base font-bold overflow-hidden bg-gradient-to-r from-accent to-[var(--accent-secondary)] text-white border-0 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-105 active:scale-95 transition-all duration-300"
              asChild
            >
              <a href="/cv/MRaihanHatim-FrontEnd.pdf" target="_blank">
                <span className="relative z-10 flex items-center gap-2">
                  Download CV
                  <Download className="h-4 w-4" />
                </span>
              </a>
            </Button>

            <div className="flex gap-3">
              {[
                { icon: <Github className="h-5 w-5" />, href: "https://github.com/mraihanhatim04", label: "GitHub" },
                { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/mraihanhatim/", label: "LinkedIn" },
                { icon: <Mail className="h-5 w-5" />, href: "https://mail.google.com/mail/?view=cm&fs=1&to=raihanhatim.01@gmail.com", label: "Email" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="group flex items-center justify-center h-12 w-12 rounded-full glass-card text-muted-foreground transition-all duration-300 hover:text-accent hover:glow-sm hover:scale-110 active:scale-95"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </animated.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  )
}
