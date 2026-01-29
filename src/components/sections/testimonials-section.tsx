"use client"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Sample testimonials - these can be replaced with actual client testimonials when available
  const testimonials = [
    {
      name: "Client Name",
      role: "Marketing Director",
      company: "Company Name",
      message: "Mohamed delivered exceptional quality video content that perfectly captured our brand's essence. The engagement on our social media platforms increased significantly after publishing his work.",
      avatar: "/assets/testimonials/avatar1.jpg",
      initials: "CN"
    },
    {
      name: "Client Name",
      role: "Content Manager",
      company: "Company Name",
      message: "Working with Mohamed was a pleasure. His attention to detail and ability to turn our ideas into compelling visual stories exceeded our expectations. We'll definitely be working together again.",
      avatar: "/assets/testimonials/avatar2.jpg",
      initials: "CN"
    },
    {
      name: "Client Name",
      role: "Creative Director",
      company: "Company Name",
      message: "The motion graphics Mohamed created for our campaign were simply outstanding. His technical skills combined with creative vision brought our brand message to life in ways we hadn't imagined possible.",
      avatar: "/assets/testimonials/avatar3.jpg",
      initials: "CN"
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What my clients say about working with me
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
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <Quote className="h-8 w-8 text-primary/60" />
                <p className="text-sm italic">"{testimonial.message}"</p>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}