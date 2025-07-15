"use client"
import { useState, useEffect } from "react"
import { Link as ScrollLink } from 'react-scroll'
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { useTheme } from "./theme-provider"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navItems = [
    { name: "Home", to: "home" },
    { name: "Portfolio", to: "portfolio" },
    { name: "Contact", to: "contact" }
  ]

  const NavItems = ({ mobile = false, onClick = () => {} }) => (
    <>
      {navItems.map((item) => (
        <ScrollLink
          key={item.to}
          to={item.to}
          smooth={true}
          duration={500}
          onClick={onClick}
          className={cn(
            "cursor-pointer transition-colors",
            mobile 
              ? "block py-3 text-lg" 
              : "hover:text-primary"
          )}
        >
          {item.name}
        </ScrollLink>
      ))}
    </>
  )

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/90 backdrop-blur-md py-3 shadow-md" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer">
          <h1 className={cn(
            "font-bold text-xl transition-colors",
            scrolled ? "text-foreground" : "text-white"
          )}>
            Mohamed<span className="text-primary">ElMaaty</span>
          </h1>
        </ScrollLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className={cn(
            "flex items-center gap-6 transition-colors",
            scrolled ? "text-muted-foreground" : "text-white"
          )}>
            <NavItems />
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className={scrolled ? "" : "text-white hover:text-white hover:bg-white/20"}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className={scrolled ? "" : "text-white hover:text-white hover:bg-white/20"}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className={scrolled ? "" : "text-white hover:text-white hover:bg-white/20"}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col mt-10 gap-4">
                <NavItems mobile onClick={() => document.body.click()} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}