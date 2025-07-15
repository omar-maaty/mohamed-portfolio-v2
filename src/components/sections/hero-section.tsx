"use client"
import { Button } from "@/components/ui/button"
import { Link as ScrollLink } from 'react-scroll'
import { ChevronDown, Play } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Video Background with animated overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-20" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse opacity-60 z-10" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse opacity-60 z-10" />
        
        {/* Background image */}
        <div className="w-full h-full bg-gray-900">
          <div className="w-full h-full bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center opacity-70" />
        </div>
      </div>

      {/* Content with enhanced animations */}
      <div className="container mx-auto px-4 relative z-30">
        <div 
          className={cn(
            "max-w-4xl mx-auto text-center transition-all duration-1000 transform",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          {/* Status badge */}
          <div className="mb-8 animate-in fade-in duration-1000 delay-300">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-white">Available for freelance projects</span>
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white leading-tight animate-in slide-in-from-bottom-5 duration-1000">
            Turning <span className="text-primary">Brands</span> into <br />
            Stories Worth <span className="text-primary">Watching</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-5 duration-1000 delay-150">
            Mohamed Abo Elmaaty – Creative Video Editor crafting impactful visual content for startups & global brands.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-in slide-in-from-bottom-5 duration-1000 delay-300">
            <Button 
              size="lg" 
              className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/80 text-white rounded-full px-8 py-6 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300"
              asChild
            >
              <a href="https://www.youtube.com/@mohamedmaaty8181/featured" target="_blank" rel="noopener noreferrer">
                <Play className="h-5 w-5" /> Watch My Work
              </a>
            </Button>
            <Button 
              size="lg" 
              className="w-full sm:w-auto gap-2 bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 shadow-lg shadow-green-600/20 hover:shadow-xl hover:shadow-green-600/30 hover:-translate-y-1 transition-all duration-300"
              asChild
            >
              <a href="https://wa.me/201553564066" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto gap-2 border-white/30 text-white hover:text-primary hover:border-white hover:bg-white/10 transition-all duration-300 rounded-full px-8 py-6 backdrop-blur-sm"
              asChild
            >
              <a href="https://mostaql.com/u/MohamedMaaty" target="_blank" rel="noopener noreferrer">
                <span className="font-bold text-sm mr-1">M</span> My Mostaql Profile
              </a>
            </Button>
          </div>
        </div>

        {/* Enhanced Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer group">
            <div className="p-2 rounded-full border border-white/20 backdrop-blur-sm bg-white/5 group-hover:bg-white/10 transition-all duration-300">
              <ChevronDown className="h-6 w-6 text-white opacity-80 group-hover:text-primary group-hover:opacity-100 transition-colors duration-300" />
            </div>
          </ScrollLink>
        </div>
      </div>
    </section>
  )
}