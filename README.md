# Smart Maintenance Scheduler

![Next.js](https://img.shields.io/badge/Next.js-15.2.4-000000?style=flat&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-6.5.0-2D3748?style=flat&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-4169E1?style=flat&logo=postgresql&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?style=flat&logo=vercel)
![CI](https://github.com/jdpasternak/smart-maintenance-scheduler/actions/workflows/ci.yml/badge.svg)

Smart Maintenance Scheduler is a lightweight and intuitive web application designed to help teams track, schedule, and log maintenance tasks for machinery and equipment. It streamlines preventive maintenance workflows for small manufacturing operations and industrial environments.

## 🚀 Features

- Add, edit, and delete machines with service schedules
- Auto-calculate next maintenance dates based on usage or time
- View status-based schedule dashboards (healthy, due soon, overdue)
- Log completed maintenance and review historical records
- Email alerts for overdue maintenance
- Role-based access control (Admins, Users)
- Modern UI with TailwindCSS and headless components
- Built with Next.js, Prisma, and PostgreSQL

## 🛠 Tech Stack Overview

This project uses a modern, modular stack optimized for developer productivity, type safety, and maintainability.

| Layer              | Technology                                                                 | Why It Was Chosen                                                                         |
| ------------------ | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **Framework**      | [Next.js 15](https://nextjs.org)                                           | Full-stack React framework with built-in routing, SSR, App Router support, and API routes |
| **Language**       | [TypeScript](https://www.typescriptlang.org/)                              | Strong typing, better dev experience, early error detection                               |
| **Styling**        | [Tailwind CSS](https://tailwindcss.com)                                    | Utility-first styling system, fast to build responsive UIs                                |
| **UI Components**  | [shadcn/ui](https://ui.shadcn.com) + [Radix UI](https://www.radix-ui.com/) | Headless, accessible components with Tailwind styling and full control                    |
| **Database**       | [PostgreSQL](https://www.postgresql.org/)                                  | Open-source relational database with strong support for structured data                   |
| **ORM**            | [Prisma](https://www.prisma.io)                                            | Type-safe query builder, smooth schema migrations, and great DX                           |
| **Deployment**     | [Vercel](https://vercel.com)                                               | Optimized for Next.js, automatic CI/CD, preview deployments                               |
| **CI/CD**          | [GitHub Actions](https://github.com/features/actions)                      | Linting, type checks, and formatting run on push                                          |
| **Email Service**  | [Resend](https://resend.com)                                               | For sending alert emails for overdue maintenance                                          |
| **Error Handling** | Custom Error Boundary + Logger (`lib/logger.ts`)                           | Catches client and server errors, logs contextfully                                       |

## 🔐 Authentication

This project uses [NextAuth.js](https://authjs.dev/) for authentication with session support and PostgreSQL-based persistence via the [Prisma Adapter](https://authjs.dev/reference/adapter/prisma).

Currently, configuration only exists for [Google OAuth](https://developers.google.com/identity/protocols/oauth2).

To enable authentication, the following environment variables must be set:

```env
AUTH_GOOGLE_ID=your-google-client-id
AUTH_GOOGLE_SECRET=your-google-client-secret
```

Session data is stored in the PostgreSQL database. All secrets are stored securely in the .env file and never committed to version control.

For full setup instructions, see the official [NextAuth.js docs](https://authjs.dev/guides/nextjs).

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/smart-maintenance-scheduler.git
cd smart-maintenance-scheduler

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Push schema and generate Prisma client
npx prisma db push
npx prisma generate

# Run the development server
npm run dev
```

## ⚙️ Environment Variables

The following .env values must be configured:

```env
DATABASE_URL=postgresql://...
SENDGRID_API_KEY=...
NEXTAUTH_SECRET=...
```

## 🧪 Scripts

```bash
npm run dev        # Start dev server
npm run lint       # Run ESLint
npm run format     # Run Prettier
npm run build      # Build for production
npm test           # Run test suite (if configured)
```

## 📄 License

This project is licensed under the MIT License.
