"use client"

import { useEffect, useState } from "react"

const nameVariants = ["Sahil Raj", "साहील राज", "Sahil राज", "साहील Raj"]

export default function RotatingName() {
  const [nameIndex, setNameIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const intervalId = window.setInterval(() => {
      setNameIndex((currentIndex) => (currentIndex + 1) % nameVariants.length)
    }, 2600)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <>
      <span className="sr-only">Sahil Raj</span>
      <span className="rotating-name" key={nameIndex} aria-hidden="true" data-script={nameIndex % 2 === 1 ? "devanagari" : "latin"}>
        {nameVariants[nameIndex]}
      </span>
    </>
  )
}
