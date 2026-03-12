"use client"

import { Github, Linkedin } from "lucide-react"

export default function Footer() {
    return (
        <footer className="py-8 relative z-10 bg-card-bg border-t border-purple/20 shadow-[0_-10px_30px_rgba(124,58,237,0.05)] text-center">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">

                <div className="text-text-secondary font-mono text-sm flex items-center">
                    <span className="text-purple mr-2">&copy;</span>
                    Anvin Biju 2026. All rights reserved.
                </div>

                <div className="text-text-secondary/70 text-sm">
                    Built with Next.js & Tailwind CSS
                </div>

                <div className="flex items-center gap-4 text-text-secondary">
                    <a
                        href="https://github.com/anvinbiju1-lab"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-glow-purple hover:text-white transition-all transform hover:scale-110"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/anvin-biju-29633b381/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-glow-purple hover:text-white transition-all transform hover:scale-110"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    )
}
