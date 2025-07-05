"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User, Share2, MapPin, Settings, LogOut, ChevronDown, Clock } from "lucide-react"
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebaseconfig";

export default function ProfileSection({
    userName = "John Doe",
    userAvatar,
    onConnectShare,
    onSavedLocations,
    onSettings,
    onLogout,
    onProfileClick,
}) {
    const router = useRouter();
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)

    const menuItems = [
        {
            id: "connect",
            label: "Connect / Share Location",
            icon: Share2,
            onClick: onConnectShare,
            color: "text-blue-600",
            hoverColor: "hover:bg-blue-50",
        },
        {
            id: "saved",
            label: "Saved Locations",
            icon: MapPin,
            onClick: onSavedLocations,
            color: "text-green-600",
            hoverColor: "hover:bg-green-50",
        },
        {
            id: "history",
            label: "Location History",
            icon: Clock,
            onClick: () => console.log("Location History clicked"),
            color: "text-purple-600",
            hoverColor: "hover:bg-purple-50",
        },
        {
            id: "settings",
            label: "Settings",
            icon: Settings,
            onClick: onSettings,
            color: "text-gray-600",
            hoverColor: "hover:bg-gray-50",
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.2 },
        },
    }

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push("/Dashboard");
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="h-full w-full bg-white border-l  flex flex-col "
        >
            {/* Profile Header */}
            <motion.div variants={itemVariants} className="p-4 ">
                <div className="relative">
                    <motion.button
                        onClick={() => {
                            setIsProfileDropdownOpen(!isProfileDropdownOpen)
                            onProfileClick?.()
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                    >
                        <div className="relative">
                            {userAvatar ? (
                                <image
                                    src={userAvatar ? userAvatar : "/placeholder.svg"}
                                    alt={userName}
                                    width={48}
                                    height={48}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                                    priority
                                />
                            ) : (
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                    <User className="w-6 h-6 text-white" />
                                </div>
                            )}
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="flex-1 text-left">
                            <h3 className="font-semibold text-gray-900 text-sm">{userName}</h3>
                            <p className="text-xs text-gray-500">Online</p>
                        </div>
                        <ChevronDown
                            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isProfileDropdownOpen ? "rotate-180" : ""
                                }`}
                        />
                    </motion.button>

                    {/* Profile Dropdown */}
                    <AnimatePresence>
                        {isProfileDropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                transition={{ duration: 0.15 }}
                                className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-10"
                            >
                                <div className="p-2">
                                    <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors">
                                        View Profile
                                    </button>
                                    <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors">
                                        Edit Profile
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>

            {/* Main Menu Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {menuItems.map((item, index) => (
                    <motion.button
                        key={item.id}
                        variants={itemVariants}
                        onClick={item.onClick}
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full flex items-center space-x-3 p-4 rounded-xl border border-gray-100 bg-white transition-all duration-200 ${item.hoverColor} hover:border-gray-200 hover:shadow-sm group`}
                    >
                        <div className={`p-2 rounded-lg bg-gray-50 group-hover:bg-white transition-colors duration-200`}>
                            <item.icon className={`w-5 h-5 ${item.color}`} />
                        </div>
                        <div className="flex-1 text-left">
                            <span className="font-medium text-gray-900 text-sm">{item.label}</span>
                        </div>
                    </motion.button>
                ))}
            </div>

            {/* Logout Button */}
            <motion.div variants={itemVariants} className="p-4 border-t border-gray-100">
                <motion.button
                    onClick={handleLogout}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center space-x-3 p-3 rounded-xl text-red-600 hover:bg-red-50 transition-all duration-200 group"
                >
                    <div className="p-2 rounded-lg bg-red-50 group-hover:bg-red-100 transition-colors duration-200">
                        <LogOut className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-sm">Logout</span>
                </motion.button>
            </motion.div>
        </motion.div>
    )
}
