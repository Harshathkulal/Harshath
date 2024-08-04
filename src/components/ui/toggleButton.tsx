"use client"

import * as React from "react"
import { MdDarkMode,MdLightMode  } from "react-icons/md";
import { useTheme } from "next-themes"

import { Button } from "./Button"


export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {theme === "light" ? (
        <MdLightMode className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <MdDarkMode className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}