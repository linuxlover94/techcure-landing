import React, { createContext, useContext, useEffect, useState } from "react"

const ThemeProviderContext = createContext({
    theme: "system",
    setTheme: () => null,
})

export function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "vite-ui-theme",
    ...props
}) {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem(storageKey) || defaultTheme
    })

    useEffect(() => {
        const root = window.document.documentElement

        const applyTheme = () => {
            root.classList.remove("light", "dark")
            if (theme === "system") {
                const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                root.classList.add(systemTheme)
            } else {
                root.classList.add(theme)
            }
        }

        applyTheme()

        if (theme === "system") {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
            const handleChange = () => applyTheme()
            mediaQuery.addEventListener("change", handleChange)
            return () => mediaQuery.removeEventListener("change", handleChange)
        }
    }, [theme])

    const value = {
        theme,
        setTheme: (newTheme) => {
            localStorage.setItem(storageKey, newTheme)
            setTheme(newTheme)
        },
    }

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
    const context = useContext(ThemeProviderContext)

    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider")

    return context
}
