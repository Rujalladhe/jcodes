"use client";

import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";
import { SunIcon, MoonIcon } from "@/components/icons";

type Theme = "light" | "dark";

const THEME_EVENT = "cgpt-theme-change";

function subscribe(callback: () => void) {
  window.addEventListener(THEME_EVENT, callback);
  return () => window.removeEventListener(THEME_EVENT, callback);
}

function getSnapshot(): Theme {
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}

// Server (and the first hydration render) always assume dark, matching the
// default applied in globals.css. The no-flash script in layout.tsx has
// already set the real class, so the client snapshot corrects it immediately.
function getServerSnapshot(): Theme {
  return "dark";
}

function setTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("light", theme === "light");
  root.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem("theme", theme);
  } catch {
    /* ignore storage failures (private mode, etc.) */
  }
  window.dispatchEvent(new Event(THEME_EVENT));
}

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to grey theme" : "Switch to dark theme"}
      title={isDark ? "Switch to grey theme" : "Switch to dark theme"}
      className={cn(
        "cgpt-glass flex h-10 w-10 items-center justify-center rounded-md border border-cgpt-line text-cgpt-fg transition-colors hover:border-white/30",
        className,
      )}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
