"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "../app/providers/theme-provider";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div className="flex items-center gap-2 rounded-lg border p-1">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded ${
          theme === "light" ? "bg-muted" : ""
        }`}
        aria-label="Light mode"
      >
        <Sun className="h-4 w-4" />
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded ${
          theme === "dark" ? "bg-muted" : ""
        }`}
        aria-label="Dark mode"
      >
        <Moon className="h-4 w-4" />
      </button>

      <button
        onClick={() => setTheme("system")}
        className={`p-2 rounded ${
          theme === "system" ? "bg-muted" : ""
        }`}
        aria-label="System mode"
      >
        <Monitor className="h-4 w-4" />
      </button>
    </div>
  );
}
