
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-accent/10 bg-background py-16 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-full max-w-5xl bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-48 w-[80%] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center text-center">
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed text-center">
              Engineering high-performance web experiences with <span className="text-foreground/80 font-medium">precision</span> and <span className="text-accent italic">purpose</span>.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-accent/5 flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Muhammad Raihan Hatim. All rights reserved.
          </p>
          <div className="text-xs text-muted-foreground flex items-center gap-2">
            Built with <span className="text-accent animate-pulse">✦</span> React & Tailwind
          </div>
        </div>
      </div>
    </footer>
  )
}
