# To-Do Frontend

This is the **frontend** of the To-Do application, built with **Next.js** and **TypeScript**.

The app communicates with the backend API to manage tasks, including creating, updating, and searching tasks.

## Table of Contents

- [To-Do Frontend](#to-do-frontend)
  - [Table of Contents](#table-of-contents)
  - [Demo](#demo)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Running the Project](#running-the-project)

## Demo

Frontend is deployed at: [https://to-do-frontend-2vyd.onrender.com](https://to-do-frontend-2vyd.onrender.com)

## Features

- View all tasks
- Search tasks with debounce
- Filter tasks by status, category, and priority
- Responsive design

## Technologies

- Next.js 14
- TypeScript
- TailwindCSS
- React Hooks

## Setup

1. Clone the repository:

```bash
git clone https://github.com/Moriae1337/to-do-frontend.git
cd to-do-frontend
```

2. Install dependencies:

```bash
npm install
```

Environment Variables

Create a .env.local file at the root of the project with the following variable:

```bash
NEXT_PUBLIC_BASE_URL=http://localhost:8000
```

This should point to your deployed backend URL.

## Running the Project

To start the development server:

```bash
npm run dev
```

**Visit** http://localhost:3000

**Deployed Frontend**: [https://to-do-backend-zva2.onrender.com](https://to-do-frontend-2vyd.onrender.com)
