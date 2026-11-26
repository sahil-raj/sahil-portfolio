import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sahil Raj — Software Engineering at Wells Fargo",
  description: "Sahil Raj is a technology program analyst in software engineering at Wells Fargo.",
  openGraph: {
    title: "Sahil Raj — Software Engineering at Wells Fargo",
    description: "Technology program analyst working in software engineering at Wells Fargo.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#f3f0e7",
  colorScheme: "light",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
