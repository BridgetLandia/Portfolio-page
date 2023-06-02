import { createContext, useContext, useState, useLayoutEffect } from "react";

const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
    const initialTheme = () => localStorage.getItem("PORTFOLIO_THEME");

    const [theme, setTheme] = useState(initialTheme);
    const toggleTheme = () =>
        setTheme((theme) => (theme === "dark" ? "light" : "dark"));

    useLayoutEffect(() => {
        localStorage.setItem("PORTFOLIO_THEME", theme);
        if (theme === "dark") {
            document.documentElement.classList.remove("light_mode");
            document.documentElement.classList.add("dark_mode");

        } else {
            document.documentElement.classList.remove("dark_mode");
            document.documentElement.classList.add("light_mode");
        }
    }, [theme]);
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
export { ThemeProvider, useTheme };