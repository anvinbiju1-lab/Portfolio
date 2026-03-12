"use client"

import { motion } from "framer-motion"
import { Trophy, ShieldCheck } from "lucide-react"

export default function Achievements() {
    return (
        <section id="achievements" className="py-24 relative z-10 bg-black/40 border-y border-purple-900/20">
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
                        <span className="command">sudo show</span> achievements
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        Proof of <span className="text-gold text-glow-gold">Work</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Card 1: Hackathon */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                        className="achievement-card-gold bg-card-bg/60 backdrop-blur-md rounded-2xl p-8 relative overflow-hidden group hover:bg-card-bg transition-colors"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-gold/20 transition-colors" />

                        <div className="flex items-start gap-6 relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center border border-gold/30 shrink-0">
                                <Trophy size={32} className="text-gold" />
                            </div>

                            <div>
                                <div className="text-gold font-mono text-sm mb-1 tracking-wider uppercase">National Level Hackathon</div>
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-glow-gold transition-all">
                                    VOID FRAME 2.0
                                </h3>
                                <div className="text-text-secondary font-medium mb-4">
                                    Certificate of Participation
                                </div>
                                <p className="text-sm text-text-secondary/80 leading-relaxed mb-4">
                                    24-hour web-based hackathon organized by IEDC, Holy Grace Academy of Engineering, Mala
                                </p>
                                <div className="inline-block px-3 py-1 rounded bg-[#1A1B26] border border-card-border text-xs font-mono text-white/50">
                                    Feb 4-5, 2026
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Workshop */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: 0.2 }}
                        className="achievement-card-cyan bg-card-bg/60 backdrop-blur-md rounded-2xl p-8 relative overflow-hidden group hover:bg-card-bg transition-colors"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-cyan/20 transition-colors" />

                        <div className="flex items-start gap-6 relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-cyan/10 flex items-center justify-center border border-cyan/30 shrink-0">
                                <ShieldCheck size={32} className="text-cyan" />
                            </div>

                            <div>
                                <div className="text-cyan font-mono text-sm mb-1 tracking-wider uppercase">Cybersecurity Workshop</div>
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-glow-cyan transition-all">
                                    The 360° Cyber Blueprint
                                </h3>
                                <div className="text-text-secondary font-medium mb-4">
                                    Certificate of Participation
                                </div>
                                <p className="text-sm text-text-secondary/80 leading-relaxed mb-4">
                                    Workshop organized by Offenscanso Hackers Academy Pvt Ltd, covering modern threat landscapes and ethical hacking methodologies.
                                </p>
                                <div className="inline-block px-3 py-1 rounded bg-[#1A1B26] border border-card-border text-xs font-mono text-white/50">
                                    Feb 14, 2026
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
