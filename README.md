﻿# Project: Point Claimer(Backend)

## Description
Claimer Pointer is a website where we can add users, and instantly assign them random point values (1–10) via a "Claim Points" button. The backend—built with Node.js, Express, MongoDB, and Mongoose—handles user storage, point updates, and a detailed claim history. The frontend uses React, TypeScript, Redux Toolkit, RTK Query, and Tailwind CSS to display interactive cards, real-time rankings, and paginated user views. Every claim is logged and displayed in a history section, ensuring transparency and engaging competition.

## Overview
This is the backend API for the Leaderboard app. It lets you:
- Add users
- Claim random points (1–10) for users
- Store each claim in history
- Provide paginated users and current leaderboard

## Tech Stack
- Node.js & Express.js
- MongoDB & Mongoose
- Zod for validation
- CORS

### Install
```bash
git clone https://github.com/ShailySarker/Point-Claimer-Backend-Side

cd Point-Claimer-Backend-Side

npm install

npm run dev

```
### Create a .env file:
```bash

PORT=1000

MONGODB_URL=mongodb://localhost:27017/Pointer-Claimer-DB
```
