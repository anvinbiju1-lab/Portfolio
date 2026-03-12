"use client"

import { useEffect, useState } from "react"

export default function CursorGlow() {
    const [position, setPosition] = useState({ x: -100, y: -100 })
    const [isPointer, setIsPointer] = useState(false)
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        // Hide custom cursor on mobile touch devices
        if (window.matchMedia("(pointer: coarse)").matches) {
            setHidden(true)
            return
        }

        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        const updatePointerStatus = () => {
            const target = document.elementFromPoint(position.x, position.y)
            if (!target) return

            const computedStyle = window.getComputedStyle(target)
            setIsPointer(
                computedStyle.cursor === "pointer" ||
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button"
            )
        }

        const handleMouseLeave = () => setHidden(true)
        const handleMouseEnter = () => setHidden(false)

        window.addEventListener("mousemove", updatePosition)
        window.addEventListener("mousemove", updatePointerStatus)
        document.addEventListener("mouseleave", handleMouseLeave)
        document.addEventListener("mouseenter", handleMouseEnter)

        return () => {
            window.removeEventListener("mousemove", updatePosition)
            window.removeEventListener("mousemove", updatePointerStatus)
            document.removeEventListener("mouseleave", handleMouseLeave)
            document.removeEventListener("mouseenter", handleMouseEnter)
        }
    }, [position.x, position.y])

    if (hidden) return null

    return (
        <>
            {/* Primary bright dot */}
            <div
                className="cursor-glow"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
                }}
            />
            {/* Trailing ring */}
            <div
                className="cursor-glow-trail"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
                    borderColor: isPointer ? "rgba(6, 182, 212, 0.6)" : "rgba(124, 58, 237, 0.4)",
                }}
            />
        </>
    )
}
