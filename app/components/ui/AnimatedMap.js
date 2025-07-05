"use client"

import { motion } from "framer-motion"

export function AnimatedMap() {
    return (
        <div className="relative w-full h-96 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100">
            <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Map Grid */}
                <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Animated Paths */}
                <motion.path
                    d="M50,150 Q150,50 250,150 T350,100"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", ease: "easeInOut" }}
                />

                {/* Location Pins */}
                <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <circle cx="100" cy="120" r="8" fill="#ef4444" />
                    <circle cx="100" cy="120" r="4" fill="#ffffff" />
                </motion.g>

                <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <circle cx="200" cy="80" r="8" fill="#10b981" />
                    <circle cx="200" cy="80" r="4" fill="#ffffff" />
                </motion.g>

                <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                >
                    <circle cx="300" cy="180" r="8" fill="#f59e0b" />
                    <circle cx="300" cy="180" r="4" fill="#ffffff" />
                </motion.g>

                {/* Pulse Animation */}
                <motion.circle
                    cx="200"
                    cy="80"
                    r="20"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    opacity="0.6"
                    animate={{ r: [15, 30, 15], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
            </svg>
        </div>
    )
}
