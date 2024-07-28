# Email Config

# settings.py

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.example.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'your-email@example.com'
EMAIL_HOST_PASSWORD = 'your-password'
DEFAULT_FROM_EMAIL = 'webmaster@example.com'

# views.py

from django.core.mail import EmailMessage
from django.template.loader import render_to_string

def send_welcome_email(user):
    subject = 'Welcome to our site'
    message = render_to_string('emails/welcome_email.html', {'user': user})
    email = EmailMessage(subject, message, to=[user.email])
    email.content_subtype = 'html'
    email.send()
