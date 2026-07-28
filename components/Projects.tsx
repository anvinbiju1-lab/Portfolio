"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, MousePointerClick, Users, Github, ChevronLeft, ChevronRight, X, ExternalLink, Bot, ShieldCheck, Lock, Wifi } from "lucide-react"
import Image from "next/image"

const PROJECTS = [
    {
        id: "scanmatrix",
        title: "ScanMatrix",
        icon: <Shield size={24} className="text-cyan-light" />,
        date: "2025 – Present",
        description: "Comprehensive Android security app that scans installed apps, permissions, and network activity. Features real-time threat detection, VirusTotal API integration for on-demand APK/file reputation checks, DNS monitoring, and per-app permission management with revoke controls. Built with on-device heuristic scan engine and WorkManager for scheduled threat-definition updates.",
        tags: ["Kotlin", "Jetpack Compose", "Room DB", "VirusTotal API", "Android 14"],
        github: "https://github.com/anvinbiju1-lab/ScanMatrix",
        theme: "cyan"
    },
    {
        id: "jarvis-lite",
        title: "Jarvis Lite – Android Voice Assistant",
        icon: <Bot size={24} className="text-slate-light" />,
        date: "May 2026 – Present",
        description: "Building a voice-first Android assistant app in Kotlin with Jetpack Compose that controls on-screen phone actions using Accessibility Service, speech recognition, and safe Android system APIs.",
        details: [
            "Accessibility-based action engine: node search by text and content description, indexed clickable item selection, safe text entry into editable fields",
            "Voice command parsing with execution result logging and fallback error handling",
            "Reusable app adapters (YouTube, Instagram) for automating in-app actions via voice",
            "Designed within Android platform limits, no root required"
        ],
        tags: ["Kotlin", "Jetpack Compose", "Android Accessibility Service", "Speech-to-Text APIs"],
        github: "https://github.com/anvinbiju1-lab/Jarvis-Lite",
        theme: "slate"
    },
    {
        id: "cyberscan",
        title: "CyberScan – Web Security & HTTP Header Auditor",
        icon: <ShieldCheck size={24} className="text-cyan-light" />,
        date: "Jul 2026",
        description: "CyberScan is a web security auditing utility that analyzes HTTP response headers and security configurations of target websites in real-time.",
        details: [
            "Automated Security Analysis: Built an engine using Python (FastAPI) and async HTTP requests to inspect critical headers, including Content-Security-Policy (CSP), Strict-Transport-Security (HSTS), X-Frame-Options, and X-Content-Type-Options.",
            "Risk Evaluation & Scoring: Developed a rule-based scoring module that grades web server configurations, flags version/server banner disclosures, and offers actionable remediation tips.",
            "Modern UI & Deployment: Designed an intuitive dark-themed dashboard using Tailwind CSS featuring dynamic state transitions, animated score counters, and scan history tracking."
        ],
        tags: ["Python", "FastAPI", "Tailwind CSS", "Web Security"],
        github: "https://github.com/anvinbiju1-lab/CyberScan",
        link: "https://anvin-cyber-scan.vercel.app",
        theme: "cyan"
    },
    {
        id: "keyguard",
        title: "KeyGuard – Password & Breach Auditor",
        icon: <Lock size={24} className="text-slate-light" />,
        date: "Jul 2026",
        description: "KeyGuard is a privacy-first web application engineered to evaluate password mathematical strength and check against known data breach repositories using zero-knowledge principles.",
        details: [
            "Privacy-First Breach Checking: Integrated the HaveIBeenPwned API via k-Anonymity range requests (SHA-1 hashing); guarantees plain-text passwords and full hashes are never exposed over the network.",
            "Information Entropy Calculation: Built an algorithmic evaluator in Python that measures string length, character set distribution, and bit-entropy to score security posture accurately.",
            "Enterprise Interface: Designed a clean, minimalist dashboard with real-time entropy metrics, character pool badges, and actionable remediation feedback."
        ],
        tags: ["Information Security", "Python", "HaveIBeenPwned API", "Bit-Entropy"],
        github: "https://github.com/anvinbiju1-lab/KeyGuard",
        link: "https://anvin-key-guard.vercel.app",
        theme: "slate"
    },
    {
        id: "wistream",
        title: "WiStream – Wi-Fi FTP Media Server",
        icon: <Wifi size={24} className="text-cyan-light" />,
        date: "Mar 2026",
        description: "Built a native Android app in Kotlin that turns an Android phone into an always‑on Wi‑Fi FTP media server for local streaming to Android TV via VLC. It lets users select a folder to share, runs as a foreground service so it keeps working with the screen off, and is optimized for smooth playback of large 3–4 GB movie files over Wi‑Fi.",
        tags: ["Kotlin", "Android", "FTP Server", "Foreground Service", "VLC Streaming"],
        github: "https://github.com/anvinbiju1-lab/WiStream",
        theme: "cyan"
    },
    {
        id: "clickforge",
        title: "ClickForge",
        icon: <MousePointerClick size={24} className="text-slate-light" />,
        date: "2026",
        description: "Lightweight Windows desktop utility for custom mouse shortcuts using global low-level hooks. Features hold-click actions (screenshots, app launches, volume control), animated system tray UI, and single-file exe packaging. Runs at <0.5% CPU idle usage.",
        tags: ["Python", "CustomTkinter", "pynput", "pystray", "PyInstaller"],
        github: "https://github.com/anvinbiju1-lab/ClickForge",
        theme: "slate",
        images: ["/clickforge.png", "/clickforge-settings.png", "/clickforge-log.png", "/clickforge-edit.png"]
    },
    {
        id: "instagram",
        title: "Instagram Non-Followers Finder",
        icon: <Users size={24} className="text-cyan-light" />,
        date: "2026",
        description: "Chrome Extension (MV3) that scans your Instagram followers/following to identify accounts not following back. Features DOM parsing, throttled profile checks, CSV export, and persistent settings via chrome.storage.",
        tags: ["JavaScript", "Chrome MV3", "DOM Parsing", "CSV Export"],
        github: "https://github.com/anvinbiju1-lab/IG-Non-Followers",
        theme: "cyan"
    }
]

function ImageCarousel({ images, isModal = false }: { images: string[], isModal?: boolean }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation()
        e.preventDefault()
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation()
        e.preventDefault()
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    if (!images || images.length === 0) return null

    return (
        <div className={`relative w-full ${isModal ? 'aspect-video md:aspect-[16/10]' : 'aspect-video'} rounded-lg overflow-hidden mb-6 border border-[#334155] group-hover:border-slate/30 transition-colors group/carousel`}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={images[currentIndex]}
                        alt={`Preview ${currentIndex + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                    />
                </motion.div>
            </AnimatePresence>

            {images.length > 1 && (
                <>
                    <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity backdrop-blur-sm border border-white/10"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity backdrop-blur-sm border border-white/10"
                        aria-label="Next image"
                    >
                        <ChevronRight size={18} />
                    </button>

                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover/carousel:opacity-100 transition-opacity">
                        {images.map((_, i) => (
                            <div
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full ${i === currentIndex ? 'bg-white' : 'bg-white/30'}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

function ProjectModal({ project, onClose }: { project: any, onClose: () => void }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = 'unset' }
    }, [])

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] p-4 sm:p-6 md:p-12 flex items-center justify-center pointer-events-auto"
            >
                <div
                    className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                    onClick={onClose}
                />

                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    className="relative w-full max-w-5xl max-h-full bg-[#1E293B] border border-[#334155] rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex-none p-4 md:p-6 border-b border-[#334155] flex items-center justify-between bg-[#1E293B] z-20">
                        <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-[#1A1B26] border ${project.theme === 'slate' ? 'border-slate/30 shadow-slate-glow' : 'border-cyan/30 shadow-cyan-glow'}`}>
                                {project.icon}
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">{project.title}</h2>
                                {project.date && <p className="text-xs font-mono text-cyan">{project.date}</p>}
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
                            title="Close"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto hidden-scrollbar p-4 md:p-8 bg-[#1E293B]">
                        {project.images ? (
                            <div className="mb-8">
                                <ImageCarousel images={project.images} isModal />
                            </div>
                        ) : null}

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="md:col-span-2">
                                <h3 className="text-cyan-light font-mono text-sm mb-3 tracking-widest uppercase">&gt; DESCRIPTION</h3>
                                <p className="text-text-secondary leading-relaxed text-base md:text-lg mb-6">{project.description}</p>

                                {project.details && (
                                    <div className="space-y-3 border-t border-[#334155] pt-6">
                                        <h4 className="text-white font-mono text-sm tracking-widest uppercase">&gt; KEY_HIGHLIGHTS</h4>
                                        <ul className="space-y-2.5 text-text-secondary text-sm">
                                            {project.details.map((bullet: string, i: number) => (
                                                <li key={i} className="flex items-start gap-2.5">
                                                    <span className="text-cyan font-mono mt-0.5">&gt;</span>
                                                    <span className="leading-relaxed">{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div>
                                <h3 className="text-slate-light font-mono text-sm mb-4 tracking-widest uppercase">&gt; TECH_STACK</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag: string) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-mono px-3 py-1.5 rounded bg-[#1A1B26] text-text-secondary border border-cyan-900/30"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-8 pt-8 border-t border-[#334155] space-y-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary w-full flex items-center justify-center gap-2"
                                    >
                                        <Github size={20} />
                                        Source Code
                                    </a>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-outline-cyan w-full flex items-center justify-center gap-2"
                                        >
                                            <ExternalLink size={20} />
                                            Test Now / Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<any>(null)

    return (
        <section id="projects" className="py-24 relative z-10 hidden-scrollbar overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="section-command">
                        <span className="prompt">&gt;</span>
                        <span className="command">cat</span> projects.json
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        Featured <span className="text-cyan">Projects</span> ({PROJECTS.length})
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {PROJECTS.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="project-card flex flex-col h-full bg-card-bg group cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className={`h-1.5 w-full ${project.theme === 'slate' ? 'bg-gradient-to-r from-slate to-blue-600' : 'bg-gradient-to-r from-cyan to-pink-600'}`} />

                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-[#1A1B26] border ${project.theme === 'slate' ? 'border-slate/30 group-hover:border-slate/60 group-hover:shadow-slate-glow' : 'border-cyan/30 group-hover:border-cyan/60 group-hover:shadow-cyan-glow'} transition-all`}>
                                        {project.icon}
                                    </div>

                                    <div className="flex items-center gap-3">
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-text-secondary hover:text-cyan transition-colors"
                                                aria-label={`Test ${project.title}`}
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <ExternalLink size={20} className="hover:scale-110 transition-transform" />
                                            </a>
                                        )}
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-text-secondary hover:text-white transition-colors"
                                            aria-label={`View ${project.title} on GitHub`}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Github size={22} className="group-hover:text-glow-cyan transition-all" />
                                        </a>
                                    </div>
                                </div>

                                {project.date && (
                                    <div className="text-xs font-mono text-cyan/70 mb-2">{project.date}</div>
                                )}

                                {project.images && <ImageCarousel images={project.images} />}

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-glow-cyan transition-all">
                                    {project.title}
                                </h3>
                                <p className="text-text-secondary leading-relaxed mb-6 flex-1 text-sm lg:text-base line-clamp-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-6 border-t border-card-border/50">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="text-xs font-mono px-2.5 py-1 rounded bg-[#1A1B26] text-text-secondary group-hover:text-white transition-colors border border-transparent group-hover:border-cyan/30"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    )
}
