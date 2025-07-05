Here’s the full `README.md` based on your screenshots:

---

````md
# LiveTrack – Real-time Location Sharing App

## 🛰 Overview

**LiveTrack** is a real-time location sharing web application built with **Next.js**, **Leaflet**, **Socket.IO**, and **Firebase**.  
Users can share their live location, see friends on a map, and manage their profile and privacy settings.

---

## ✨ Features

- 📍 Real-time location sharing with friends
- 🗺 Interactive map with custom markers (Leaflet)
- 🔐 User authentication (Firebase)
- 🛡 Protected routes for dashboard and profile
- 💻 Responsive and modern UI (Tailwind CSS, Framer Motion)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or above recommended)
- npm or yarn

---

### 📦 Installation

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd navigationnew
````

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

---

### 🔐 Environment Setup

Create a `.env.local` file in the root directory with your Firebase config:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
# ...other Firebase keys
```

---

### 🧠 Running the App

1. **Start the Socket.IO backend server**

```bash
nodemon app/server/SocktServr.js
```

> Starts the real-time location server on port **3001**

2. **Start the Next.js frontend**

```bash
npm run dev
# or
yarn dev
```

> App runs at: [http://localhost:3000](http://localhost:3000)

---

## 🧰 Tech Stack

* **Next.js** – React framework
* **Leaflet** – Interactive maps
* **Socket.IO** – Real-time communication
* **Firebase** – Auth & config
* **Tailwind CSS** – Styling
* **Framer Motion** – UI animations

---

## 📂 Project Structure

```
app/
  ├── components/
  ├── pages/
  ├── server/
  ├── lib/
  └── public/
```

Notes
Make sure both the frontend and backend servers are running for full functionality.
Update Firebase config in firebaseconfig.js and .env.local as needed.
For production, use a process manager (like PM2) for the backend server.
---
