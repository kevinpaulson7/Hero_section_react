Hero Section - React + TypeScript

![Project Screenshot](./screenshots/image.png) <!-- Add a screenshot of your landing page here -->

A visually engaging landing page built with **React**, **TypeScript**, **Vite**, and **Framer Motion**, featuring animated hills, hero text, and sequential animations.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Dynamic animated hills using **Framer Motion**
- Sequential pop-up animations for target hills
- Animated **Hero Text** overlay
- Responsive design for desktop, tablet, and mobile
- Background runner animation
- Easy to extend with additional animations or sections

---

## Technologies Used

- **React** (v18+) – Component-based UI
- **TypeScript** – Type safety
- **Vite** – Development server and build tool
- **Framer Motion** – Smooth animations
- **Tailwind CSS** – Utility-first styling

---

## Project Structure

Hero_section/
│
├─ public/ # Static assets
├─ src/
│ ├─ assets/ # Images, logos
│ ├─ components/ # React components
│ │ ├─ Background.tsx
│ │ ├─ BackgroundRunner.tsx
│ │ ├─ HillShape.tsx
│ │ ├─ HillValley.tsx
│ │ ├─ HillValleyWrapper.tsx
│ │ ├─ Header.tsx
│ │ └─ HeroText.tsx
│ ├─ utils/ # Helper functions
│ │ └─ hillUtils.ts
│ ├─ App.tsx
│ └─ main.tsx # Vite entry point
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
└─ README.md

yaml
Copy code

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm (v9+ recommended) or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/kevinpaulson7/Hero_section_react.git
cd Hero_section
Install dependencies:

bash
Copy code
npm install
# or
yarn
Run the development server:

bash
Copy code
npm run dev
# or
yarn dev
Open http://localhost:5173 to view in your browser.

Available Scripts
Command	Description
npm run dev	Starts the development server
npm run build	Builds the app for production in dist/ folder
npm run preview	Preview production build locally
```
