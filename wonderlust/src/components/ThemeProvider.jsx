"use client"
import React, { useState } from "react"
import { Theme } from "@radix-ui/themes"
import NavBar from "./Navbar"

export function ThemeProvider({children}) {
  const [isDark, setIsDark] = useState(false)
  return <Theme appearance={isDark? "dark" : "light"}>
      <NavBar isDark = {isDark} setIsDark= {setIsDark} />
        {children}
    </Theme>
}