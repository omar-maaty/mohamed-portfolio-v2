"use client"
import { Card, CardContent } from "@/components/ui/card"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const skills = [
    { name: "Premiere Pro", icon: "✓" },
    { name: "After Effects", icon: "✓" },
    { name: "CapCut", icon: "✓" },
    { name: "Motion Graphics", icon: "✓" },
    { name: "Sound Design", icon: "✓" },
    { name: "Color Correction", icon: "✓" },
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </div>
          
          <div 
            ref={ref}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            {/* Image with soft rounded square container and glowing circle */}
            {isInView && (
              <motion.div 
                className="relative"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {/* Semi-transparent glowing circle behind the image */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-primary/10 dark:bg-primary/5 blur-3xl z-0"></div>
                
                {/* Soft rounded square container */}
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg border border-muted">
                  <img 
                    src="/images/pic.png" 
                    alt="Profile" 
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-8 border-background rounded-full bg-primary/10 flex items-center justify-center z-20">
                  <span className="font-bold text-lg">3+ Years<br/>Experience</span>
                </div>
              </motion.div>
            )}
            
            {/* Content */}
            {isInView && (
              <motion.div 
                className="space-y-6"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              >
                <h3 className="text-2xl font-semibold">
                  Video Editor & Motion Designer
                </h3>
                <p className="text-muted-foreground">
                  With over 3 years of experience in short-form video editing, I specialize in creating 
                  captivating content for Reels, Shorts, Ads, and more. My work has helped clients from 
                  Germany, USA, UAE, and Saudi Arabia establish their brand presence through compelling 
                  visual storytelling.
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-medium">Skills & Tools</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {skills.map((skill, index) => (
                      <Card key={index} className="border-none bg-muted/50">
                        <CardContent className="p-3 flex items-center gap-2">
                          <span className="text-primary font-bold">{skill.icon}</span>
                          <span>{skill.name}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
