# SkillX App

The main Next.js application for the SkillX platform, featuring user authentication, database integration, and modern React components.

## 🚀 Features

- **Authentication System**: JWT-based login and registration
- **Database Integration**: PostgreSQL with Redis caching
- **Modern UI**: Built with React 19 and Tailwind CSS
- **Type Safety**: Full TypeScript support
- **Server Actions**: Next.js server actions for API calls
- **Responsive Design**: Mobile-first approach

## 🛠️ Technology Stack

- **Next.js 15.5.4** - React framework with App Router
- **React 19** - Latest React features
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first CSS framework
- **PostgreSQL** - Primary database
- **Redis** - Caching and session storage
- **JWT** - JSON Web Token authentication
- **bcryptjs** - Password hashing

## 📁 Project Structure

```
skillx-app/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # React components
│   │   ├── Button.tsx       # Reusable button component
│   │   └── LoginForm.tsx    # Login form component
│   ├── db/                  # Database layer
│   │   ├── connection.ts    # PostgreSQL connection
│   │   ├── redis_client.tsx # Redis client
│   │   ├── users.ts         # User data access
│   │   ├── types.ts         # TypeScript types
│   │   └── migrations/      # Database migrations
│   └── actions.tsx          # Server actions
├── public/                  # Static assets
├── Dockerfile              # Docker configuration
└── package.json            # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Redis server
- Docker (optional)

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Create a `.env.local` file:
   ```env
   DATABASE_URL=postgresql://postgres:password@localhost:5432/skillx_db
   REDIS_URL=redis://localhost:6379
   JWT_SECRET=your-secret-key-here
   ```

3. **Initialize the database**:
   ```bash
   npm run db:init
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production with Turbopack
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npm run db:init      # Initialize database with migrations
```

## 🗄️ Database Setup

### PostgreSQL Connection

The app connects to PostgreSQL using the connection string in `DATABASE_URL`. 

### Database Initialization

Run the initialization script to set up tables and initial data:

```bash
npm run db:init
```

This will:
- Create the users table
- Set up necessary indexes
- Initialize Redis connection

### Database Schema

The main tables include:

- **users**: User accounts and authentication data
- **sessions**: User session management
- **cache**: Redis-based caching layer

## 🔐 Authentication

### JWT Implementation

The app uses JWT tokens for authentication:

- **Login**: Validates credentials and returns JWT
- **Registration**: Creates new user accounts
- **Session Management**: Redis-based session storage
- **Password Security**: bcryptjs for password hashing

### Login Flow

1. User submits login form
2. Server validates credentials against database
3. JWT token is generated and stored in Redis
4. Client receives token for subsequent requests

## 🎨 UI Components

### Available Components

- **Button**: Reusable button with variants
- **LoginForm**: Complete login/registration form
- **Layout**: App-wide layout wrapper

### Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Theme toggle support
- **Custom Components**: Reusable React components

## 🐳 Docker Support

### Development with Docker

```bash
# Build the image
docker build -t skillx-app .

# Run with environment variables
docker run -p 3000:3000 \
  -e DATABASE_URL=postgresql://postgres:password@host.docker.internal:5432/skillx_db \
  -e REDIS_URL=redis://host.docker.internal:6379 \
  skillx-app
```

### Docker Compose

The app is included in the main `docker-compose.yml`:

```yaml
services:
  app:
    build: ./skillx-app
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://postgres:password@postgres:5432/skillx_db
      - REDIS_URL=redis://redis:6379
    depends_on:
      - postgres
      - redis
```

## 🔧 Development

### Code Structure

- **App Router**: Uses Next.js 13+ App Router
- **Server Actions**: API calls using Next.js server actions
- **Type Safety**: Full TypeScript coverage
- **Component Architecture**: Reusable, composable components

### Database Operations

All database operations are handled through:

- **connection.ts**: PostgreSQL connection management
- **users.ts**: User-related database operations
- **redis_client.tsx**: Redis operations
- **migrations/**: Database schema changes

### Environment Variables

Required environment variables:

```env
DATABASE_URL=postgresql://user:password@host:port/database
REDIS_URL=redis://host:port
JWT_SECRET=your-jwt-secret-key
```

## 🚀 Deployment

### Production Build

```bash
npm run build
npm run start
```

### Environment Configuration

For production, ensure:

1. **Secure JWT Secret**: Use a strong, random secret
2. **Database Security**: Use connection pooling and SSL
3. **Redis Security**: Configure authentication if needed
4. **Environment Variables**: Set all required variables

### Docker Production

```bash
# Build production image
docker build -t skillx-app:latest .

# Run with production environment
docker run -d \
  --name skillx-app \
  -p 3000:3000 \
  -e NODE_ENV=production \
  -e DATABASE_URL=your-production-db-url \
  -e REDIS_URL=your-production-redis-url \
  skillx-app:latest
```

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection**: Ensure PostgreSQL is running and accessible
2. **Redis Connection**: Verify Redis server is running
3. **JWT Errors**: Check JWT_SECRET is set correctly
4. **Build Errors**: Clear node_modules and reinstall

### Debug Commands

```bash
# Check database connection
npm run db:init

# View logs
docker logs skillx-app

# Test Redis connection
redis-cli ping
```

## 📚 API Reference

### Server Actions

- **loginUser**: Authenticate user credentials
- **registerUser**: Create new user account
- **getUser**: Retrieve user information
- **logoutUser**: Clear user session

### Database Operations

- **createUser**: Insert new user
- **findUserByEmail**: Find user by email
- **updateUser**: Update user information
- **deleteUser**: Remove user account

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is part of the SkillX infrastructure and follows the same licensing terms.
