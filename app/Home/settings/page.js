'use client';

import React from 'react';
import {
    Shield,
    Bell,
    Map,
    Sun,
    Tablet,
    Clock,
    User,
    LogOut,
    ChevronRight
} from 'lucide-react';

const Settings = () => {
    const settingsItems = [
        {
            id: 'privacy',
            title: 'Privacy & Permissions',
            description: 'Manage who can see your location and data',
            icon: Shield,
            color: 'from-blue-500 to-cyan-500'
        },
        {
            id: 'notifications',
            title: 'Notification Preferences',
            description: 'Customize alerts and push notifications',
            icon: Bell,
            color: 'from-purple-500 to-pink-500'
        },
        {
            id: 'location',
            title: 'Location Accuracy Settings',
            description: 'Configure GPS precision and battery usage',
            icon: Map,
            color: 'from-green-500 to-emerald-500'
        },
        {
            id: 'theme',
            title: 'Appearance / Theme Mode',
            description: 'Switch between light and dark themes',
            icon: Sun,
            color: 'from-yellow-500 to-orange-500'
        },
        {
            id: 'devices',
            title: 'Manage Connected Devices',
            description: 'View and control linked devices',
            icon: Tablet,
            color: 'from-indigo-500 to-blue-500'
        },
        {
            id: 'data',
            title: 'Data & History',
            description: 'Access location history and analytics',
            icon: Clock,
            color: 'from-teal-500 to-cyan-500'
        },
        {
            id: 'account',
            title: 'Account Management',
            description: 'Update profile and security settings',
            icon: User,
            color: 'from-rose-500 to-pink-500'
        }
    ];

    const handleLogout = () => {
        console.log("Logging out...");
    };

    return (
        <div className="min-h-screen bg-gradient-to-b to-[#ffebeb]  from-white text-gray-800 px-4 py-10">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
                    Settings
                </h1>
                <p className="text-center text-gray-600 mb-10">Control your preferences and app experience</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {settingsItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.id}
                                className="group p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all duration-300 cursor-pointer"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color}`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-cyan-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-500 leading-snug">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center">
                    <button
                        onClick={handleLogout}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-red-100 text-red-600 border border-red-200 rounded-lg hover:text-red-700 hover:bg-red-200 transition-all"
                    >
                        <LogOut className="w-5 h-5" />
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
