"use client";

import React from "react";
import clsx from "clsx";

export function Button({
    children,
    className = "",
    variant = "primary",
    size = "md",
    ...props
}) {
    const base =
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variants = {
        primary:
            "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        outline:
            "bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-100",
        ghost:
            "bg-transparent text-gray-700 hover:bg-gray-100",
    };
    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    return (
        <button
            className={clsx(
                base,
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}