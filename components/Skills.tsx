"use client"

import { motion } from "framer-motion"

const SKILL_CATEGORIES = [
    {
        title: "🔤 Languages",
        skills: ["Python", "Java", "C++", "C", "JavaScript", "HTML"],
        theme: "cyan"
    },
    {
        title: "🛠️ Frameworks & Tools",
        skills: ["Jetpack Compose", "Next.js", "Tailwind CSS", "Android Studio", "CustomTkinter", "PyInstaller", "Antigravity IDE"],
        theme: "slate"
    },
    {
        title: "🔐 Cybersecurity",
        skills: ["Kali Linux", "Wireless Pentesting", "Network Analysis", "Ethical Hacking"],
        theme: "cyan"
    },
    {
        title: "📦 Other",
        skills: ["Git & GitHub", "Chrome Extension MV3", "Room DB", "WorkManager", "pynput", "pystray"],
        theme: "slate"
    }
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
        }
    }
}

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative z-10 bg-black/40 border-y border-cyan-900/20">
            <div className="absolute inset-0 grid-pattern opacity-30 mix-blend-screen pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <div className="section-command inline-block mb-4">
                        <span className="prompt">&gt;</span>
                        <span className="command">ls</span> skills/
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        My <span className="text-cyan text-glow-cyan">Arsenal</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {SKILL_CATEGORIES.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="bg-card-bg/50 backdrop-blur-sm border border-card-border rounded-xl p-8 hover:border-cyan/30 transition-colors group relative overflow-hidden"
                        >
                            {/* Glowing Orb Top Right */}
                            <div className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-[64px] -mr-24 -mt-24 transition-all duration-500 ${category.theme === "slate" ? "bg-slate/10 group-hover:bg-slate/30" : "bg-cyan/10 group-hover:bg-cyan/30"}`} />

                            <h3 className="text-xl font-bold text-white mb-6 font-mono group-hover:text-glow-cyan transition-all relative z-10">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-3 relative z-10">
                                {category.skills.map((skill) => (
                                    <motion.div
                                        key={skill}
                                        variants={itemVariants}
                                        className={`skill-tag ${category.theme === "slate" ? "slate" : ""}`}
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
