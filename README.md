# SkillX Infrastructure

A comprehensive full-stack application infrastructure built with Next.js, Django, PostgreSQL, and Redis, containerized with Docker.

## 🏗️ Architecture Overview

This project consists of three main applications:

- **skillx-home**: Next.js landing page and marketing site
- **skillx-app**: Next.js main application with authentication and user management
- **skillx-core**: Django REST API backend with PostgreSQL database
- **Infrastructure**: Docker Compose setup with PostgreSQL and Redis

## 📁 Project Structure

```
next-infra/
├── skillx-home/          # Next.js landing page
├── skillx-app/           # Next.js main application
├── skillx-core/          # Django REST API
├── docker-compose.yml    # Docker orchestration
└── README.md            # This file
```

## 🚀 Quick Start

### Prerequisites

- Docker and Docker Compose
- Node.js 18+ (for local development)
- Python 3.13+ (for local development)

### Option 1: Docker (Recommended)

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd next-infra
   ```

2. **Start all services**:
   ```bash
   docker-compose up --build
   ```

3. **Access the applications**:
   - Landing Page: http://localhost:3001
   - Main App: http://localhost:3000
   - API: http://localhost:8000
   - PostgreSQL: localhost:5432
   - Redis: localhost:6379

### Option 2: Local Development

1. **Start infrastructure services**:
   ```bash
   docker-compose up postgres redis -d
   ```

2. **Install and run each service**:
   ```bash
   # Landing page
   cd skillx-home
   npm install
   npm run dev

   # Main application
   cd skillx-app
   npm install
   npm run dev

   # API backend
   cd skillx-core
   poetry install
   poetry run python manage.py runserver
   ```

## 🛠️ Development Setup

### Environment Configuration

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL=postgresql://postgres:password@localhost:5432/skillx_db
REDIS_URL=redis://localhost:6379

# JWT Configuration
JWT_SECRET=your-secret-key-here
NEXTAUTH_SECRET=your-nextauth-secret-here

# API Configuration
DJANGO_SECRET_KEY=your-django-secret-key
```

### Database Setup

1. **Initialize the database**:
   ```bash
   cd skillx-app
   npm run db:init
   ```

2. **Run Django migrations**:
   ```bash
   cd skillx-core
   poetry run python manage.py migrate
   ```

## 📋 Available Commands

### Docker Commands

```bash
# Start all services
docker-compose up

# Start in background
docker-compose up -d

# Stop services
docker-compose down

# Rebuild and restart
docker-compose up --build

# View logs
docker-compose logs -f

# Stop and remove volumes
docker-compose down -v
```

### Development Commands

```bash
# Landing page (skillx-home)
cd skillx-home
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier

# Main app (skillx-app)
cd skillx-app
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:init      # Initialize database

# API (skillx-core)
cd skillx-core
poetry run python manage.py runserver    # Start development server
poetry run python manage.py migrate      # Run migrations
poetry run python manage.py createsuperuser  # Create admin user
```

## 🔧 Technology Stack

### Frontend
- **Next.js 15.5.4** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React 19** - UI library

### Backend
- **Django 5.2.7** - Python web framework
- **Django REST Framework** - API framework
- **JWT Authentication** - Token-based auth
- **PostgreSQL** - Primary database
- **Redis** - Caching and sessions

### Infrastructure
- **Docker** - Containerization
- **Docker Compose** - Orchestration
- **Poetry** - Python dependency management
- **npm** - Node.js package management

## 📊 Services and Ports

| Service | Port | Description |
|---------|------|-------------|
| skillx-home | 3001 | Landing page |
| skillx-app | 3000 | Main application |
| skillx-core | 8000 | Django API |
| PostgreSQL | 5432 | Database |
| Redis | 6379 | Cache |

## 🔐 Authentication

The application uses JWT-based authentication:

- **Frontend**: Next.js with custom JWT handling
- **Backend**: Django REST Framework with SimpleJWT
- **Session Storage**: Redis for session management

## 📝 API Documentation

The Django API provides RESTful endpoints for:

- User authentication and management
- Data persistence
- Session handling

API documentation is available at: http://localhost:8000/api/

## 🚀 Deployment

### Production Considerations

1. **Environment Variables**: Set secure production values
2. **Database**: Use managed PostgreSQL service
3. **Redis**: Use managed Redis service
4. **Security**: Update default passwords and secrets
5. **SSL**: Configure HTTPS certificates
6. **Monitoring**: Set up logging and monitoring

### Docker Production

```bash
# Build production images
docker-compose -f docker-compose.prod.yml up --build

# Or use individual services
docker-compose up app api postgres redis
```

## 🐛 Troubleshooting

### Common Issues

1. **Port Conflicts**: Check if ports 3000, 3001, 8000, 5432, 6379 are available
2. **Database Connection**: Ensure PostgreSQL is running and accessible
3. **Redis Connection**: Verify Redis service is running
4. **Build Issues**: Clear Docker cache with `docker-compose build --no-cache`

### Debug Commands

```bash
# Check service status
docker-compose ps

# View service logs
docker-compose logs -f [service-name]

# Access container shell
docker-compose exec [service-name] sh

# Reset everything
docker-compose down -v
docker volume prune
```

## 📚 Additional Documentation

- [skillx-home README](./skillx-home/README.md) - Landing page documentation
- [skillx-app README](./skillx-app/README.md) - Main application documentation
- [skillx-core README](./skillx-core/README.md) - API documentation
- [Docker Setup Guide](./DOCKER_README.md) - Detailed Docker configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:

- Check the troubleshooting section above
- Review individual service documentation
- Open an issue in the repository
