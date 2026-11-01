"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface TilesProps {
  className?: string
  rows?: number
  cols?: number
  tileClassName?: string
  tileSize?: "sm" | "md" | "lg" | "xl"
}

const tileSizes = {
  sm: "w-8 h-8",
  md: "w-10 h-10 md:w-12 md:h-12",
  lg: "w-12 h-12 md:w-16 md:h-16",
  xl: "w-16 h-16 md:w-20 md:h-20",
}

export function Tiles({
  className,
  rows = 50,
  cols = 8,
  tileClassName,
  tileSize = "lg",
}: TilesProps) {
  const rowsArray = new Array(rows).fill(1)
  const colsArray = new Array(cols).fill(1)

  return (
    <div 
      className={cn(
        "relative z-0 flex w-full h-full justify-center pointer-events-none select-none",
        className
      )}
    >
      {rowsArray.map((_, i) => (
        <div
          key={`row-${i}`}
          className={cn(
            tileSizes[tileSize],
            "border-l border-line/20 relative",
            tileClassName
          )}
        >
          {colsArray.map((_, j) => (
            <div
              key={`col-${j}`}
              className={cn(
                tileSizes[tileSize],
                "border-r border-t border-line/20 relative",
                tileClassName
              )}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
