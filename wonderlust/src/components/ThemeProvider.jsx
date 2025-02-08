"use client"
import React, { useLayoutEffect, useState } from "react"
import { Theme } from "@radix-ui/themes"
import NavBar from "./Navbar"
import { redirect} from "next/navigation";


export function ThemeProvider({children}) {
  const [isDark, setIsDark] = useState(false)
  return <Theme appearance={isDark? "dark" : "light"}>
      <NavBar isDark = {isDark} setIsDark= {setIsDark} />
        {children}
    </Theme>
}