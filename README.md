# Smart Maintenance Scheduler

Smart Maintenance Scheduler is a lightweight and intuitive web application designed to help teams track, schedule, and log maintenance tasks for machinery and equipment. It streamlines preventive maintenance workflows for small manufacturing operations and industrial environments.

---

## 🚀 Features

- Add, edit, and delete machines with service schedules
- Auto-calculate next maintenance dates based on usage or time
- View status-based schedule dashboards (healthy, due soon, overdue)
- Log completed maintenance and review historical records
- Email alerts for overdue maintenance
- Role-based access control (Admins, Users)
- Modern UI with TailwindCSS and headless components
- Built with Next.js, Prisma, and PostgreSQL

---

## 🛠 Tech Stack

| Layer         | Tech Used                        |
| ------------- | -------------------------------- |
| Framework     | Next.js (App Router)             |
| UI Components | TailwindCSS, shadcn/ui, Radix UI |
| Database      | PostgreSQL                       |
| ORM           | Prisma                           |
| Deployment    | Vercel                           |
| Auth          | Auth.js or Clerk (configurable)  |
| Email Service | SendGrid                         |
| CI/CD         | GitHub Actions                   |

---

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

---

![CI](https://github.com/jdpasternak/smart-maintenance-scheduler/actions/workflows/ci.yml/badge.svg)
