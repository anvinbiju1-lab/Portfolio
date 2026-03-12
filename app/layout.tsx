import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Anvin Biju — Software Developer & Cybersecurity Enthusiast',
    description:
        '18-year-old builder from Kerala, creating tools that solve everyday problems. B.Tech CSE (Cybersecurity) student with expertise in Android, Web Dev, and ethical hacking.',
    keywords: [
        'Anvin Biju',
        'Portfolio',
        'Software Developer',
        'Cybersecurity',
        'Android Developer',
        'Kerala',
        'Next.js',
    ],
    authors: [{ name: 'Anvin Biju' }],
    openGraph: {
        title: 'Anvin Biju — Portfolio',
        description: 'Software Developer & Cybersecurity Enthusiast from Kerala, India.',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="bg-[#0F172A] text-[#F4F4F4] font-sans antialiased overflow-x-hidden">
                {children}
            </body>
        </html>
    )
}
