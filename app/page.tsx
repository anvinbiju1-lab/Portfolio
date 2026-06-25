import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import CursorGlow from "@/components/CursorGlow"
import dynamic from "next/dynamic"

// Dynamically import below-the-fold sections
const About = dynamic(() => import("@/components/About"))
const Skills = dynamic(() => import("@/components/Skills"))
const Projects = dynamic(() => import("@/components/Projects"))
const Achievements = dynamic(() => import("@/components/Achievements"))
const Education = dynamic(() => import("@/components/Education"))
const Contact = dynamic(() => import("@/components/Contact"))

export default function Home() {
    return (
        <main className="min-h-screen bg-background relative selection:bg-cyan/30 selection:text-white page-fade-in">
            {/* Client-side cursor component for desktop */}
            <CursorGlow />

            <Navbar />

            {/* Sections */}
            <div className="flex flex-col w-full h-full relative z-10">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Achievements />
                <Education />
                <Contact />
            </div>

            <Footer />

            {/* Background Glow Overlays */}
            <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyan/10 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="fixed bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-slate/10 rounded-full blur-[120px] pointer-events-none z-0" />
        </main>
    )
}
