"use client"
import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState("All")

  // Categories
  const categories = ["All", "Reels", "Long", "Motion"]

  // YouTube embed URLs for the portfolio with categories
  const portfolioItems = [
  {
    embedUrl: "https://www.youtube.com/embed/GiL3w0yde9Q",
    category: "Reels",
  },
  {
    embedUrl: "https://www.youtube.com/embed/oG1KaBajqUk",
    category: "Reels",
  },
  {
    embedUrl: "https://www.youtube.com/embed/KgMtWrLFIuE",
    category: "Long",
  },
  {
    embedUrl: "https://www.youtube.com/embed/buVQeGXLIT0",
    category: "Long",
  },
  {
    embedUrl: "https://www.youtube.com/embed/Zz9xh9UNW9M",
    category: "Motion",
  },
  {
    embedUrl: "https://www.youtube.com/embed/JiB5CKurP6A",
    category: "Motion",
  },
]

  // Filter videos based on active category
  const filteredVideos = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my collection of video editing and motion design work
          </p>
          <div className="h-1 w-20 bg-primary mx-auto mt-4"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300",
                activeFilter === category 
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : "bg-muted hover:bg-muted/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div 
          ref={ref} 
          className={cn(
            "transition-all duration-700 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {/* Portfolio Video Grid */}
          <div className="max-w-6xl mx-auto">
            {isInView && (
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeFilter}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {filteredVideos.map((item, index) => (
                    <motion.div
                      key={`${activeFilter}-${index}`}
                      className="aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      layout
                    >
                      <iframe
                        src={item.embedUrl}
                        className="w-full h-full"
                        title={`Video ${index + 1}`}
                        allowFullScreen
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      ></iframe>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}