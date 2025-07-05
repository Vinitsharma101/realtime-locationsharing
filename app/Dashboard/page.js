"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "../components/ui/button"
import { AnimatedMap } from "../components/ui/AnimatedMap";
import { MapPin, Users, Zap, Shield } from "lucide-react"

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            {/* Header */}
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 px-6 py-4"
            >
                <nav className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <MapPin className="h-8 w-8 text-blue-600" />
                        <span className="text-2xl font-bold text-gray-900">LiveTrack</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="/Dashboard/login">
                            <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                                Sign In/Sign Up
                            </Button>
                        </Link>
                        {/* <Link href="/signup">
                            <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
                        </Link> */}
                    </div>
                </nav>
            </motion.header>

            {/* Hero Section */}
            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium"
                            >
                                <Zap className="h-4 w-4 mr-2" />
                                Real-time Location Sharing
                            </motion.div>

                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Share your{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                    live location
                                </span>{" "}
                                with friends instantly
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed">
                                Connect with friends and family in real-time. See where everyone is, share your adventures, and never
                                lose track of your loved ones.
                            </p>
                        </div>

                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link href="/Dashboard/signup">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-7 py-4">
                                    Get Started Free
                                </Button>
                            </Link>
                            <Link href="/Dashboard/login">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-lg px-7 py-4 border-gray-300 hover:bg-gray-50 bg-transparent"
                                >
                                    Sign In
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Features */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="grid sm:grid-cols-3 gap-6 pt-8"
                        >
                            <div className="flex items-center space-x-3">
                                <Users className="h-6 w-6 text-blue-600" />
                                <span className="text-gray-700 font-medium">Share with Groups</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Zap className="h-6 w-6 text-green-600" />
                                <span className="text-gray-700 font-medium">Real-time Updates</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Shield className="h-6 w-6 text-purple-600" />
                                <span className="text-gray-700 font-medium">Privacy First</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Animation */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                    >
                        <div className="relative z-10">
                            <AnimatedMap />
                        </div>

                        {/* Floating Cards */}
                        <motion.div
                            initial={{ scale: 0, rotate: -10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Sarah</p>
                                    <p className="text-sm text-gray-500">Online now</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0, rotate: 10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.6, delay: 1.4 }}
                            className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
                        >
                            <div className="flex items-center space-x-3">
                                <MapPin className="h-5 w-5 text-blue-600" />
                                <div>
                                    <p className="font-medium text-gray-900">2.1 km away</p>
                                    <p className="text-sm text-gray-500">Updated 1m ago</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </main>

            {/* Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -100, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 100, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                    className="absolute top-3/4 right-1/4 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
                />
            </div>
        </div>
    )
}
