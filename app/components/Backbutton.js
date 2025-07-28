'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.push('/Home')}
            className="fixed top-4 left-4 bg-white text-black px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition"
        >
            ← Back
        </button>
    );
}
