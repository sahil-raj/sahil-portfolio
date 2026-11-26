import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sahil Raj — Technology Program Analyst",
  description: "Sahil Raj is a technology program analyst at Wells Fargo, helping teams turn complex initiatives into clear, steady progress.",
  openGraph: {
    title: "Sahil Raj — Technology Program Analyst",
    description: "Thoughtful work. Meaningful progress.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#101211",
  colorScheme: "dark",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
