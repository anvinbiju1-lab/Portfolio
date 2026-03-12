"use client"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen, Book } from "lucide-react"

const EDUCATION = [
    {
        title: "B.Tech in Computer Science & Engineering (Cybersecurity)",
        institution: "Holy Grace Academy of Engineering, Mala",
        board: "APJ Abdul Kalam Technological University (KTU)",
        year: "2025 – Present (1st Year)",
        score: "Active",
        icon: <GraduationCap size={24} className="text-purple-light" />
    },
    {
        title: "Higher Secondary (12th Grade) — Computer Science",
        institution: "GSHSS Meladoor, Thrissur",
        board: "Kerala State Board",
        year: "2023 – 2025",
        score: "83%",
        icon: <BookOpen size={24} className="text-cyan-light" />
    },
    {
        title: "Secondary Education (10th Grade)",
        institution: "Elenthikkara High School, Ernakulam",
        board: "Kerala State Board",
        year: "2023",
        score: "91%",
        icon: <Book size={24} className="text-purple-light" />
    }
]

export default function Education() {
    return (
        <section id="education" className="py-24 relative z-10 px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="section-command">
                        <span className="prompt">&gt;</span>
                        <span className="command">history</span> --academic
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        Academic <span className="text-purple">Timeline</span>
                    </h2>
                </motion.div>

                <div className="relative border-l border-purple/30 ml-3 md:ml-6 pb-4 space-y-12">

                    {EDUCATION.map((edu, idx) => (
                        <motion.div
                            key={edu.title}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className="relative pl-8 md:pl-12 group"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute top-1.5 -left-[7px] bg-[#080808] border-2 border-purple group-hover:border-cyan w-[14px] h-[14px] rounded-full transition-colors z-10 timeline-dot" />

                            <div className="bg-card-bg border border-card-border p-6 rounded-xl group-hover:border-purple/50 group-hover:shadow-[0_0_20px_rgba(124,58,237,0.1)] transition-all flex flex-col sm:flex-row gap-6">

                                {/* Icon Box */}
                                <div className="w-12 h-12 rounded-lg bg-[#1A1B26] border border-card-border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    {edu.icon}
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-glow-purple transition-all">
                                        {edu.title}
                                    </h3>
                                    <div className="text-lg font-medium text-text-secondary mb-1">
                                        {edu.institution}
                                    </div>
                                    <div className="text-sm text-text-secondary/70 mb-4">
                                        {edu.board}
                                    </div>
                                    <div className="flex flex-wrap gap-3 items-center">
                                        <span className="inline-block px-3 py-1.5 rounded bg-[#1A1B26] border border-card-border text-xs font-mono text-cyan-light">
                                            {edu.year}
                                        </span>
                                        <span className="inline-block px-3 py-1.5 rounded bg-purple/10 border border-purple/30 text-xs font-mono text-purple-light">
                                            Score: {edu.score}
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    )
}
