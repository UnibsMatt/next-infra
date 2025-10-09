#!/bin/bash
set -e

# Remove old .pyc files
find . -name "*.pyc" -delete

# Run database migrations
echo "Applying database migrations..."
python manage.py migrate --noinput

python manage.py createsuperuser --noinput || true
# Collect static files
echo "Collecting static files..."
python manage.py collectstatic --noinput

# Start Gunicorn server
echo "Starting Gunicorn..."
exec gunicorn skillx_core.wsgi:application \
    --bind 0.0.0.0:8000 \
    --workers 3 \
    --log-level info
