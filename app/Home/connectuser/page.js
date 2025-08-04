// "use client";

// import Image from "next/image";
// import { User } from "lucide-react"; 
// import { useRouter } from "next/navigation";

// const markerIcons = [
//     "/markersvgs/red.svg",
//     "/markersvgs/skyblue.svg",
//     "/markersvgs/green.svg",
//     "/markersvgs/lightgreen.svg",
//     "/markersvgs/blue.svg",
// ];

// function getRandomMarkerSvg() {
//     const randomIndex = Math.floor(Math.random() * markerIcons.length);
//     return markerIcons[randomIndex]; // already starts with /
// }

// const users = [
//     {
//         id: "1",
//         name: "Aarav Patel",
//         lastActive: "2 min ago",
//         status: "online",
//         markerIcon: getRandomMarkerSvg(),
//     },
//     {
//         id: "2",
//         name: "Meera Sharma",
//         lastActive: "5 min ago",
//         status: "offline",
//         markerIcon: getRandomMarkerSvg(),
//     },
//     {
//         id: "3",
//         name: "Rohan Verma",
//         lastActive: "Just now",
//         status: "online",
//         markerIcon: getRandomMarkerSvg(),
//     },
// ];

// const requests = [
//     {
//         id: "r1",
//         name: "Kiran Rao",
//         avatar: "/default-avatar.svg",
//     },
//     {
//         id: "r2",
//         name: "Dev Mehta",
//         avatar: "/default-avatar.svg",
//     },
// ];

// export default function ConnectedUsersPage() {
//     const router = useRouter();

//     const handleUserClick = (id) => {
//         router.push(`/home?focus=${id}`);
//     };

//     return (
//         <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-10">
//             <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
//                 Connected Users
//             </h1>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//                 {users.map((user) => (
//                     <div
//                         key={user.id}
//                         onClick={() => handleUserClick(user.id)}
//                         className="bg-white rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer p-5 flex flex-col gap-4"
//                     >
//                         <div className="relative w-12 h-12">
//                             {user.usersAvtar ? (
//                                 <Image
//                                     src={user.usersAvatar || "/placeholder.svg"}
//                                     alt={users.name}
//                                     width={48}
//                                     height={48}
//                                     className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
//                                     priority
//                                 />
//                             ) : (
//                                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center border-2 border-gray-200">
//                                     <User className="w-6 h-6 text-white" />
//                                 </div>
//                             )}

//                             <div
//                                 className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${user.status === "online" ? "bg-green-500" : "bg-gray-400"
//                                     }`}
//                             ></div>
//                             <div className="flex-1">
//                                 <p className="font-medium text-gray-700">{user.name}</p>
//                                 <p className="text-sm text-gray-500">{user.lastActive}</p>
//                             </div>
                            
//                         </div>
//                         <div className="flex justify-end">
//                             <Image
//                                 src={user.markerIcon}
//                                 alt="marker"
//                                 width={24}
//                                 height={24}
//                             />
//                         </div>
//                     </div>
//                 ))}

//             </div>

//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Requests</h2>

//             <div className="flex gap-4 overflow-x-auto pb-2">
//                 {requests.map((req) => (
//                     <div
//                         key={req.id}
//                         className="bg-white rounded-xl shadow-md p-4 min-w-[240px] flex items-center justify-between shrink-0"
//                     >
//                         <div className="flex items-center gap-3">
//                             <Image
//                                 src={req.avatar || "/default-avatar.svg"}
//                                 alt={req.name}
//                                 width={40}
//                                 height={40}
//                                 className="rounded-full object-cover"
//                             />
//                             <span className="font-medium text-gray-700">{req.name}</span>
//                         </div>

//                         <div className="flex flex-col gap-1">
//                             <button className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded-full">
//                                 Accept
//                             </button>
//                             <button className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded-full">
//                                 Reject
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const markerIcons = [
    "/markersvgs/red.svg",
    "/markersvgs/skyblue.svg",
    "/markersvgs/green.svg",
    "/markersvgs/lightgreen.svg",
    "/markersvgs/blue.svg",
];

function getRandomMarkerSvg() {
    const randomIndex = Math.floor(Math.random() * markerIcons.length);
    return markerIcons[randomIndex];
}

const users = [
    {
        id: "1",
        name: "Aarav Patel",
        avatar: "",
        lastActive: "2 min ago",
        status: "online",
    },
    {
        id: "2",
        name: "Meera Sharma",
        avatar: "",
        lastActive: "5 min ago",
        status: "offline",
    },
    {
        id: "3",
        name: "Rohan Verma",
        avatar: "",
        lastActive: "Just now",
        status: "online",
    },
];

const requests = [
    {
        id: "r1",
        name: "Kiran Rao",
        avatar: "",
    },
    {
        id: "r2",
        name: "Dev Mehta",
        avatar: "",
    },
];

export default function ConnectedUsersPage() {
    const router = useRouter();

    const handleUserClick = (id) => {
        router.push(`/Home?focus=${id}`);
    };

    return (
        <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-10">
            <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
                Connected Users
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {users.map((user) => (
                    <div
                        key={user.id}
                        onClick={() => handleUserClick(user.id)}
                        className="bg-white rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer p-5 flex flex-col gap-4"
                    >
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12">
                                {user.avatar ? (
                                    <Image
                                        src={user.avatar}
                                        alt={user.name}
                                        width={48}
                                        height={48}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                                    />
                                ) : (
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center border-2 border-gray-200">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5.121 17.804A4.992 4.992 0 0112 15a4.992 4.992 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </div>
                                )}

                                {/* Status Dot */}
                                <div
                                    className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${user.status === "online" ? "bg-green-500" : "bg-gray-400"}`}
                                ></div>
                            </div>

                            <div className="flex-1">
                                <p className="font-medium text-gray-700">{user.name}</p>
                                <p className="text-sm text-gray-500">{user.lastActive}</p>
                            </div>
                            <span
                                className={`h-3 w-3 rounded-full mt-1 ${user.status === "online" ? "bg-green-500" : "bg-gray-400"}`}
                            ></span>
                        </div>
                        <div className="flex justify-end">
                            <Image src={getRandomMarkerSvg()} alt="marker" width={24} height={24} />
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Requests</h2>

            <div className="flex gap-4 overflow-x-auto pb-2">
                {requests.map((req) => (
                    <div
                        key={req.id}
                        className="bg-white rounded-xl shadow-md p-4 min-w-[240px] flex items-center justify-between shrink-0"
                    >
                        <div className="flex items-center gap-3">
                            <Image
                                src={req.avatar}
                                alt={req.name}
                                width={40}
                                height={40}
                                className="rounded-full object-cover"
                            />
                            <span className="font-medium text-gray-700">{req.name}</span>
                        </div>

                        <div className="flex flex-col gap-1">
                            <button className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                                Accept
                            </button>
                            <button className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                                Reject
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
