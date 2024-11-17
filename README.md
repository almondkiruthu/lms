# Learning Management System (LMS) Platform

## Key Features

- Browse & Filter Courses
- Purchase Courses using Stripe
- Mark Chapters as Completed or Uncompleted
- Progress Calculation of each Course
- Student Dashboard
- Teacher mode
- Create new Courses
- Create new Chapters
- Easily reorder chapter position with drag n’ drop
- Upload thumbnails, attachments, and videos using UploadThing
- Video processing using Mux
- HLS Video player using Mux
- Rich text editor for chapter description
- Authentication using Clerk
- ORM using Prisma
- MySQL database using Planetscale

## Prerequisites

- Node version >= 18.x.x

## Getting Started

### Cloning the repository

```bash
git clone https://github.com/almondkiruthu/lms-platform.git

```

### Install the packages

```bash
npm i

```

### Setup.ENV file

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

MUX_TOKEN_ID=
MUX_TOKEN_SECRET=

STRIPE_API_KEY=
NEXT_PUBLIC_APP_URL=http://localhost:3000
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_TEACHER_ID=


```

### Setup Prisma

```bash
npx prisma generate
npx prisma db push

```

### Start the APP

```bash
npm run dev
```

### Available Commands

Run commands with npm `npm run [command`

| Command | Description                              |
| ------- | ---------------------------------------- |
| dev     | Starts a development instance of the app |
