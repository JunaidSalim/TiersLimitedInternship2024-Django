# Django Environ

# .env

DEBUG=True
SECRET_KEY=your-secret-key
DATABASE_URL=psql://user:password@localhost/dbname
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_HOST_USER=your-email@example.com
EMAIL_HOST_PASSWORD=your-password


# settings.py

import environ

env = environ.Env(
    DEBUG=(bool, False)
)

# reading .env file
environ.Env.read_env()

# setting the variables
DEBUG = env('DEBUG')
SECRET_KEY = env('SECRET_KEY')
DATABASES = {
    'default': env.db(),
}
EMAIL_HOST = env('EMAIL_HOST')
EMAIL_PORT = env('EMAIL_PORT')
EMAIL_HOST_USER = env('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = env('EMAIL_HOST_PASSWORD')
