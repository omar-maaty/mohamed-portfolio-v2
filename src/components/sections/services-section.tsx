"use client"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Film, Layers, BarChart3, Music, Palette, Globe } from "lucide-react"

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      title: "Short-form Video Editing",
      description: "Professional editing for shorts, reels and TikTok videos that grab attention and drive engagement.",
      icon: <Film className="h-12 w-12" />
    },
    {
      title: "Motion Graphics",
      description: "Eye-catching animations and visual effects that bring your brand elements to life.",
      icon: <Layers className="h-12 w-12" />
    },
    {
      title: "Sound Effect",
      description: "Targeted video content optimized for social media platforms to increase reach and conversions.",
      icon: <BarChart3 className="h-12 w-12" />
    },
    {
      title: "YouTube Shorts / Reels / TikTok",
      description: "Platform-specific content creation tailored to maximize views and engagement.",
      icon: <Globe className="h-12 w-12" />
    },
    {
      title: "Sound Design",
      description: "Custom audio mixing and effects that enhance the emotional impact of your videos.",
      icon: <Music className="h-12 w-12" />
    },
    {
      title: "Color Correction/Grade",
      description: "Professional color grading to establish mood and visual consistency across all your content.",
      icon: <Palette className="h-12 w-12" />
    }
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive video editing and motion design solutions to elevate your brand
          </p>
          <div className="h-1 w-20 bg-primary mx-auto mt-4"></div>
        </div>

        <div 
          ref={ref}
          className={cn(
            "grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto transition-all duration-700 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
            >
              <CardHeader>
                <div className="text-primary mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary/80">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}