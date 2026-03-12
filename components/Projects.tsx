"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, MousePointerClick, Users, ChefHat, Github, ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"

const PROJECTS = [
    {
        id: "scanmatrix",
        title: "ScanMatrix",
        icon: <Shield size={24} className="text-purple-light" />,
        description: "Comprehensive Android security app that scans installed apps, permissions, and network activity. Features real-time threat detection, VirusTotal API integration for on-demand APK/file reputation checks, DNS monitoring, and per-app permission management with revoke controls. Built with on-device heuristic scan engine and WorkManager for scheduled threat-definition updates.",
        tags: ["Kotlin", "Jetpack Compose", "Room DB", "VirusTotal API", "Android 14"],
        github: "https://github.com/anvinbiju1-lab/ScanMatrix",
        theme: "purple"
    },
    {
        id: "clickforge",
        title: "ClickForge",
        icon: <MousePointerClick size={24} className="text-cyan-light" />,
        description: "Lightweight Windows desktop utility for custom mouse shortcuts using global low-level hooks. Features hold-click actions (screenshots, app launches, volume control), animated system tray UI, and single-file exe packaging. Runs at <0.5% CPU idle usage.",
        tags: ["Python", "CustomTkinter", "pynput", "pystray", "PyInstaller"],
        github: "https://github.com/anvinbiju1-lab/ClickForge",
        theme: "cyan",
        images: ["/clickforge.png", "/clickforge-settings.png", "/clickforge-log.png", "/clickforge-edit.png"]
    },
    {
        id: "instagram",
        title: "Instagram Non-Followers Finder",
        icon: <Users size={24} className="text-purple-light" />,
        description: "Chrome Extension (MV3) that scans your Instagram followers/following to identify accounts not following back. Features DOM parsing, throttled profile checks, CSV export, and persistent settings via chrome.storage.",
        tags: ["JavaScript", "Chrome MV3", "DOM Parsing", "CSV Export"],
        github: "https://github.com/anvinbiju1-lab/IG-Non-Followers",
        theme: "purple"
    },
    {
        id: "heatkitchen",
        title: "Heat Kitchen",
        icon: <ChefHat size={24} className="text-cyan-light" />,
        description: "Full-stack restaurant web platform built with Next.js and Tailwind CSS. Features a modern responsive UI, menu showcase, and smooth page transitions.",
        tags: ["Next.js", "Tailwind CSS", "React"],
        github: "https://github.com/anvinbiju1-lab/heat-kitchen",
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
        <div className={`relative w-full ${isModal ? 'aspect-video md:aspect-[16/10]' : 'aspect-video'} rounded-lg overflow-hidden mb-6 border border-[#1E1E2E] group-hover:border-cyan/30 transition-colors group/carousel`}>
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
    // Disable body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = 'unset' }
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/98 backdrop-blur-md"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative w-full max-w-5xl bg-[#0F0F0F] border border-[#1E1E2E] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="p-4 md:p-6 border-b border-[#1E1E2E] flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-[#1A1B26] border ${project.theme === 'cyan' ? 'border-cyan/30 shadow-cyan-glow' : 'border-purple/30 shadow-purple-glow'}`}>
                            {project.icon}
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">{project.title}</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
                        title="Close"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-4 md:p-8 overflow-y-auto hidden-scrollbar max-h-[80vh]">
                    {project.images ? (
                        <div className="mb-8">
                            <ImageCarousel images={project.images} isModal />
                        </div>
                    ) : (
                        <div className="w-full aspect-video flex-center bg-card-bg rounded-xl border border-card-border mb-8 text-text-secondary font-mono italic">
                            &gt; GALLERY_DATA_PENDING...
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                            <h3 className="text-purple-light font-mono text-sm mb-4 tracking-widest uppercase">&gt; DESCRIPTION</h3>
                            <p className="text-text-secondary leading-relaxed text-lg">{project.description}</p>
                        </div>
                        <div>
                            <h3 className="text-cyan-light font-mono text-sm mb-4 tracking-widest uppercase">&gt; TECH_STACK</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag: string) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-mono px-3 py-1.5 rounded bg-[#1A1B26] text-text-secondary border border-purple-900/30"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8 pt-8 border-t border-[#1E1E2E]">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary w-full flex items-center justify-center gap-2"
                                >
                                    <Github size={20} />
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
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
                        Featured <span className="text-purple">Projects</span>
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
                            {/* Top Accent Bar */}
                            <div className={`h-1.5 w-full ${project.theme === 'cyan' ? 'bg-gradient-to-r from-cyan to-blue-600' : 'bg-gradient-to-r from-purple to-pink-600'}`} />

                            <div className="p-8 flex flex-col flex-1">
                                {/* Header */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-[#1A1B26] border ${project.theme === 'cyan' ? 'border-cyan/30 group-hover:border-cyan/60 group-hover:shadow-cyan-glow' : 'border-purple/30 group-hover:border-purple/60 group-hover:shadow-purple-glow'} transition-all`}>
                                        {project.icon}
                                    </div>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-text-secondary hover:text-white transition-colors"
                                        aria-label={`View ${project.title} on GitHub`}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Github size={24} className="group-hover:text-glow-purple transition-all" />
                                    </a>
                                </div>

                                {/* Optional Image Carousel */}
                                {project.images && <ImageCarousel images={project.images} />}

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-glow-purple transition-all">
                                    {project.title}
                                </h3>
                                <p className="text-text-secondary leading-relaxed mb-8 flex-1 text-sm lg:text-base">
                                    {project.description}
                                </p>

                                {/* Footer (Tags) */}
                                <div className="flex flex-wrap gap-2 pt-6 border-t border-card-border/50">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="text-xs font-mono px-2.5 py-1 rounded bg-[#1A1B26] text-text-secondary group-hover:text-white transition-colors border border-transparent group-hover:border-purple/30"
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
