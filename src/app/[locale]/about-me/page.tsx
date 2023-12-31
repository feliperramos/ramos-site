'use client'
import { FooterSection, HeaderSection } from "@/components";

export default function AboutMe() {
  return (
    <div className="font-mono">
      <HeaderSection />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="prose">
          <h1>About Me Page</h1>
        </div>
      </main>
      <FooterSection />
    </div>
  )
}
