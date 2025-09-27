import { Moon, Sun } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "./ThemeProvider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Sun className="h-4 w-4 text-muted-foreground" />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        data-testid="switch-theme-toggle"
        aria-label="Toggle theme"
      />
      <Moon className="h-4 w-4 text-muted-foreground" />
    </div>
  )
}