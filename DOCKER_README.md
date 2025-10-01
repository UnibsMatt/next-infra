# Docker Setup for Next.js with PostgreSQL and Redis

This project includes a complete Docker setup for running a Next.js application in production with PostgreSQL and Redis databases.

## Services Included

- **Next.js App**: Production-ready Next.js application
- **PostgreSQL**: Primary database for data persistence
- **Redis**: Caching and session storage
- **pgAdmin**: Web-based PostgreSQL administration (optional)
- **Redis Commander**: Web-based Redis administration (optional)

## Quick Start

1. **Clone and navigate to the project**:
   ```bash
   cd next-infra
   ```

2. **Create environment file**:
   ```bash
   cp docker.env.example .env
   ```
   Edit `.env` with your desired configuration.

3. **Build and start all services**:
   ```bash
   docker-compose up --build
   ```

4. **Access the application**:
   - Next.js App: http://localhost:3000
   - pgAdmin: http://localhost:8080 (admin@skillx.com / admin)
   - Redis Commander: http://localhost:8081

## Available Commands

### Start services
```bash
docker-compose up
```

### Start services in background
```bash
docker-compose up -d
```

### Stop services
```bash
docker-compose down
```

### Stop services and remove volumes
```bash
docker-compose down -v
```

### View logs
```bash
docker-compose logs -f
```

### View logs for specific service
```bash
docker-compose logs -f app
```

### Rebuild and restart
```bash
docker-compose up --build
```

## Database Configuration

### PostgreSQL
- **Host**: localhost (or `postgres` from within containers)
- **Port**: 5432
- **Database**: skillx_db
- **Username**: postgres
- **Password**: password

### Redis
- **Host**: localhost (or `redis` from within containers)
- **Port**: 6379
- **Password**: none (default)

## Environment Variables

Copy `docker.env.example` to `.env` and configure:

- `DATABASE_URL`: PostgreSQL connection string
- `REDIS_URL`: Redis connection string
- `JWT_SECRET`: Secret key for JWT tokens
- `NEXTAUTH_SECRET`: Secret for NextAuth.js

## Production Considerations

1. **Security**: Change default passwords and secrets
2. **Volumes**: Data is persisted in Docker volumes
3. **Networking**: Services communicate via internal Docker network
4. **Health Checks**: Both databases include health checks
5. **Restart Policy**: Services restart automatically unless stopped

## Development vs Production

For development, you might want to:
- Remove pgAdmin and Redis Commander services
- Use different environment variables
- Mount source code as volumes for hot reloading

## Troubleshooting

### Port conflicts
If ports 3000, 5432, 6379, 8080, or 8081 are in use, modify the port mappings in `docker-compose.yml`.

### Database connection issues
Ensure PostgreSQL is fully started before the app starts. The `depends_on` and health checks handle this automatically.

### Build issues
Clear Docker cache:
```bash
docker-compose build --no-cache
```

### Volume issues
Reset all data:
```bash
docker-compose down -v
docker volume prune
```
