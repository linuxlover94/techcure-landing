import React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import Button from "./Button"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        const isCurrentlyDark = document.documentElement.classList.contains("dark") || 
            (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
        setTheme(isCurrentlyDark ? "light" : "dark")
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="rounded-full w-10 h-10 p-0 flex items-center justify-center"
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
