# SkillX Core API

Django REST API backend for the SkillX platform, providing authentication, data management, and business logic services.

## 🚀 Features

- **Django REST Framework**: Robust API framework with serializers and viewsets
- **JWT Authentication**: Secure token-based authentication using SimpleJWT
- **PostgreSQL Integration**: Reliable database backend with connection pooling
- **API Documentation**: Auto-generated API docs with Swagger/OpenAPI
- **Docker Support**: Containerized deployment with Docker
- **Poetry Management**: Modern Python dependency management

## 🛠️ Technology Stack

- **Django 5.2.7** - Python web framework
- **Django REST Framework** - API framework
- **SimpleJWT** - JWT authentication
- **PostgreSQL** - Primary database
- **psycopg2** - PostgreSQL adapter
- **Gunicorn** - WSGI server
- **Poetry** - Dependency management
- **Python 3.13+** - Runtime environment

## 📁 Project Structure

```
skillx-core/
├── skillx_core/              # Django project
│   ├── __init__.py
│   ├── settings.py           # Django settings
│   ├── urls.py               # URL routing
│   ├── wsgi.py               # WSGI configuration
│   └── asgi.py               # ASGI configuration
├── manage.py                  # Django management script
├── pyproject.toml            # Poetry configuration
├── poetry.lock               # Locked dependencies
├── Dockerfile                # Docker configuration
├── entrypoint.sh             # Container entrypoint
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites

- Python 3.13+
- Poetry (for dependency management)
- PostgreSQL database
- Docker (optional)

### Installation

1. **Install Poetry** (if not already installed):
   ```bash
   curl -sSL https://install.python-poetry.org | python3 -
   ```

2. **Install dependencies**:
   ```bash
   poetry install
   ```

3. **Activate the virtual environment**:
   ```bash
   poetry shell
   ```

4. **Set up environment variables**:
   Create a `.env` file:
   ```env
   SECRET_KEY=your-django-secret-key
   DEBUG=True
   DATABASE_URL=postgresql://postgres:password@localhost:5432/skillx_db
   ALLOWED_HOSTS=localhost,127.0.0.1
   ```

5. **Run database migrations**:
   ```bash
   python manage.py migrate
   ```

6. **Create a superuser** (optional):
   ```bash
   python manage.py createsuperuser
   ```

7. **Start the development server**:
   ```bash
   python manage.py runserver
   ```

8. **Access the API**:
   - API: http://localhost:8000/api/
   - Admin: http://localhost:8000/admin/

## 📋 Available Commands

```bash
# Development
poetry run python manage.py runserver    # Start development server
poetry run python manage.py migrate      # Run database migrations
poetry run python manage.py makemigrations  # Create new migrations
poetry run python manage.py collectstatic  # Collect static files

# Database
poetry run python manage.py migrate      # Apply migrations
poetry run python manage.py makemigrations  # Create migrations
poetry run python manage.py dbshell      # Open database shell

# Admin
poetry run python manage.py createsuperuser  # Create admin user
poetry run python manage.py shell        # Django shell

# Production
poetry run gunicorn skillx_core.wsgi:application  # Production server
```

## 🗄️ Database Configuration

### PostgreSQL Setup

The API uses PostgreSQL as the primary database. Configure the connection in your environment:

```env
DATABASE_URL=postgresql://username:password@host:port/database_name
```

### Database Migrations

```bash
# Create new migrations
poetry run python manage.py makemigrations

# Apply migrations
poetry run python manage.py migrate

# Check migration status
poetry run python manage.py showmigrations
```

## 🔐 Authentication

### JWT Configuration

The API uses Django REST Framework SimpleJWT for authentication:

- **Access Tokens**: Short-lived tokens for API access
- **Refresh Tokens**: Long-lived tokens for token renewal
- **Token Blacklisting**: Secure token invalidation

### Authentication Endpoints

- `POST /api/token/` - Obtain JWT token
- `POST /api/token/refresh/` - Refresh JWT token
- `POST /api/token/blacklist/` - Blacklist token

### Usage Example

```python
# Login
response = requests.post('http://localhost:8000/api/token/', {
    'username': 'user@example.com',
    'password': 'password123'
})
access_token = response.json()['access']

# Use token in requests
headers = {'Authorization': f'Bearer {access_token}'}
response = requests.get('http://localhost:8000/api/users/', headers=headers)
```

## 🎯 API Endpoints

### Core Endpoints

- **Authentication**: `/api/token/`, `/api/token/refresh/`
- **Users**: `/api/users/` (CRUD operations)
- **Admin**: `/admin/` (Django admin interface)

### API Documentation

The API includes auto-generated documentation:

- **Swagger UI**: http://localhost:8000/api/docs/
- **ReDoc**: http://localhost:8000/api/redoc/
- **OpenAPI Schema**: http://localhost:8000/api/schema/

## 🐳 Docker Support

### Development with Docker

```bash
# Build the image
docker build -t skillx-core .

# Run with environment variables
docker run -p 8000:8000 \
  -e SECRET_KEY=your-secret-key \
  -e DATABASE_URL=postgresql://postgres:password@host.docker.internal:5432/skillx_db \
  skillx-core
```

### Docker Compose

The API is included in the main `docker-compose.yml`:

```yaml
services:
  api:
    build: ./skillx-core
    ports:
      - "8000:8000"
    environment:
      - SECRET_KEY=your-secret-key
      - DATABASE_URL=postgresql://postgres:password@postgres:5432/skillx_db
    depends_on:
      postgres:
        condition: service_healthy
```

## 🔧 Development

### Code Structure

- **Django Apps**: Modular application structure
- **Serializers**: Data serialization and validation
- **ViewSets**: RESTful API endpoints
- **Models**: Database models and relationships
- **URLs**: URL routing and API endpoints

### Environment Variables

Required environment variables:

```env
SECRET_KEY=your-django-secret-key
DEBUG=True
DATABASE_URL=postgresql://user:password@host:port/database
ALLOWED_HOSTS=localhost,127.0.0.1,api.skillx.com
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001
```

### Settings Configuration

Key settings in `settings.py`:

- **Database**: PostgreSQL configuration
- **Authentication**: JWT settings
- **CORS**: Cross-origin resource sharing
- **Security**: CSRF, XSS protection
- **Logging**: Application logging configuration

## 🚀 Deployment

### Production Configuration

1. **Environment Variables**:
   ```env
   SECRET_KEY=your-production-secret-key
   DEBUG=False
   DATABASE_URL=postgresql://user:password@host:port/database
   ALLOWED_HOSTS=api.skillx.com
   ```

2. **Static Files**:
   ```bash
   poetry run python manage.py collectstatic
   ```

3. **Database Migrations**:
   ```bash
   poetry run python manage.py migrate
   ```

### Gunicorn Production Server

```bash
# Start with Gunicorn
poetry run gunicorn skillx_core.wsgi:application \
  --bind 0.0.0.0:8000 \
  --workers 4 \
  --timeout 120
```

### Docker Production

```bash
# Build production image
docker build -t skillx-core:latest .

# Run with production environment
docker run -d \
  --name skillx-api \
  -p 8000:8000 \
  -e SECRET_KEY=your-production-secret \
  -e DATABASE_URL=your-production-db-url \
  skillx-core:latest
```

## 🔒 Security

### Security Features

- **JWT Authentication**: Secure token-based auth
- **CORS Protection**: Configured for specific origins
- **CSRF Protection**: Cross-site request forgery protection
- **XSS Protection**: Cross-site scripting prevention
- **SQL Injection**: ORM-based query protection

### Security Best Practices

1. **Environment Variables**: Never commit secrets
2. **HTTPS**: Use SSL/TLS in production
3. **Token Expiration**: Set appropriate token lifetimes
4. **Input Validation**: Validate all user inputs
5. **Rate Limiting**: Implement API rate limiting

## 📊 Monitoring and Logging

### Logging Configuration

The API includes comprehensive logging:

- **Application Logs**: Request/response logging
- **Error Logs**: Exception tracking
- **Database Logs**: Query performance
- **Security Logs**: Authentication events

### Health Checks

```bash
# Check API health
curl http://localhost:8000/api/health/

# Check database connection
poetry run python manage.py check --database default
```

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection**: Ensure PostgreSQL is running
2. **Migration Errors**: Check database permissions
3. **JWT Errors**: Verify SECRET_KEY is set
4. **CORS Issues**: Check ALLOWED_HOSTS and CORS settings

### Debug Commands

```bash
# Check Django configuration
poetry run python manage.py check

# Test database connection
poetry run python manage.py dbshell

# View logs
docker logs skillx-api

# Debug mode
DEBUG=True poetry run python manage.py runserver
```

## 📚 API Documentation

### Authentication Flow

1. **Login**: POST to `/api/token/` with credentials
2. **Get Token**: Receive access and refresh tokens
3. **Use Token**: Include `Authorization: Bearer <token>` header
4. **Refresh**: Use refresh token to get new access token

### Error Handling

The API returns standardized error responses:

```json
{
  "error": "Error message",
  "code": "ERROR_CODE",
  "details": "Additional information"
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is part of the SkillX infrastructure and follows the same licensing terms.
