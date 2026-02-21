import { animated, useSpring, useTrail, config } from "@react-spring/web"
import { Button } from "@/components/ui/button"
import { Download, Sparkles, Github, Linkedin, Mail } from "lucide-react"
import { useState, useEffect } from "react"

export function Hero() {
  const [coords, setCoords] = useState({ x: 0, y: 0 })

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

  // Parallax Spring for background elements
  const parallaxSpring = useSpring({
    x: coords.x,
    y: coords.y,
    config: { mass: 1, tension: 120, friction: 60 }
  })

  // Title and Description Trail
  const content = [
    { type: "badge", text: "CRAFTING DIGITAL FUTURES" },
    { type: "description", text: "I am Muhammad Raihan Hatim, bridging the gap between complex architecture and minimalist design. Focused on the next generation of web applications." },
    { type: "ctas", text: "" }
  ]

  const trail = useTrail(content.length, {
    from: { opacity: 0, y: 40, scale: 0.98 },
    to: { opacity: 1, y: 0, scale: 1 },
    config: config.gentle,
    delay: 300,
  })

  // Background Orb Animations
  const orb1 = useSpring({
    from: { x: 0, y: 0, scale: 1 },
    to: async (next) => {
      while (true) {
        await next({ x: 50, y: 30, scale: 1.1 })
        await next({ x: 0, y: 0, scale: 1 })
      }
    },
    config: { duration: 10000 },
  })

  const orb2 = useSpring({
    from: { x: 0, y: 0, scale: 1 },
    to: async (next) => {
      while (true) {
        await next({ x: -50, y: -40, scale: 1.2 })
        await next({ x: 0, y: 0, scale: 1 })
      }
    },
    config: { duration: 12000 },
  })

  return (
    <section id="hero" className="noise-bg relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20">
      {/* 1. Futuristic Grid Layer (with mouse parallax) */}
      <animated.div 
        style={{
          transform: parallaxSpring.x.to(x => `translate3d(${x * 0.2}px, ${parallaxSpring.y.get() * 0.2}px, 0)`)
        }}
        className="grid-background absolute inset-0 -z-20 opacity-40" 
      />

      {/* 2. Abstract Glowing Orbs (React Spring Loops) */}
      <div className="absolute inset-0 -z-10 bg-background/20 backdrop-blur-[2px]">
        <animated.div
          style={{
            transform: orb1.x.to((x) => `translate3d(${x}px, ${orb1.y.get()}px, 0) scale(${orb1.scale.get()})`)
          }}
          className="absolute -top-[10%] -left-[5%] h-[60%] w-[60%] rounded-full bg-accent/20 blur-[140px]"
        />
        <animated.div
          style={{
            transform: orb2.x.to((x) => `translate3d(${x}px, ${orb2.y.get()}px, 0) scale(${orb2.scale.get()})`)
          }}
          className="absolute -bottom-[20%] -right-[10%] h-[70%] w-[70%] rounded-full bg-purple-500/10 blur-[160px]"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {trail.map((style, index) => {
            const item = content[index]
            if (item.type === "badge") {
              return (
                <animated.div key={index} style={style} className="mb-8 flex justify-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-bold tracking-wider text-accent backdrop-blur-md">
                    <Sparkles className="h-4 w-4 animate-pulse" />
                    <span>{item.text}</span>
                    <Sparkles className="h-4 w-4 animate-pulse" />
                  </div>
                </animated.div>
              )
            }
            if (item.type === "heading") {
              return (
                <animated.h1 
                  key={index}
                  style={style}
                  className="mb-8 text-6xl font-[950] tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9]"
                >
                  Engineering <br />
                  <span className="bg-gradient-to-b from-foreground via-foreground to-accent bg-clip-text text-transparent italic">
                    {item.text.replace("Engineering ", "")}
                  </span>
                </animated.h1>
              )
            }
            if (item.type === "description") {
              return (
                <animated.p 
                  key={index}
                  style={style}
                  className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground/80 sm:text-xl md:text-2xl leading-relaxed"
                >
                  I am <span className="text-foreground font-bold">Muhammad Raihan Hatim</span>, 
                  bridging the gap between <span className="text-accent italic">complex architecture</span> and 
                  <span className="text-foreground/90 font-medium"> minimalist design</span>. 
                  Focused on the next generation of web applications.
                </animated.p>
              )
            }
            if (item.type === "ctas") {
              return (
                <animated.div 
                  key={index}
                  style={style}
                  className="flex flex-col items-center justify-center gap-6 sm:flex-row"
                >
                  
                  <Button size="lg" variant="outline" className="h-11 rounded-full px-8 text-base font-bold backdrop-blur-md transition-all border-accent/20 text-foreground hover:border-accent/50 hover:bg-accent hover:text-accent-foreground active:scale-95" asChild>
                    <a href="/cv/MRaihanHatim-FrontEnd.pdf" target="_blank">
                      Download CV
                      <Download className=" h-4 w-4 flex-shrink-0" />
                    </a>
                  </Button>
                  
                  <div className="flex gap-4">
                    {[
                      { icon: <Github className="h-5 w-5" />, href: "https://github.com/mraihanhatim04" },
                      { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/mraihanhatim/" },
                      { icon: <Mail className="h-5 w-5" />, href: "https://mail.google.com/mail/?view=cm&fs=1&to=raihanhatim.01@gmail.com" },
                    ].map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        className="flex items-center justify-center h-11 w-11 rounded-full border border-accent/20 bg-background/50 text-muted-foreground backdrop-blur-md transition-all hover:border-accent/50 hover:bg-accent hover:text-accent-foreground active:scale-95"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </animated.div>
              )
            }
            return null
          })}
        </div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="pointer-events-none absolute inset-0 -z-5 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-accent/20 animate-float opacity-10"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
              width: `${20 + i * 10}px`,
              height: `${20 + i * 10}px`,
              borderRadius: i % 2 === 0 ? "50%" : "4px",
              animationDelay: `${i * 1.2}s`,
            }}
          />
        ))}
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
