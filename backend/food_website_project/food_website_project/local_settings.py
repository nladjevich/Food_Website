# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-2@lqxavatkdd)fjdoy72j8tplwv@$hw3#39*6ay-_$9-l=rfp%'

# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'food_database',
        'USER': 'root',
        'PASSWORD': 'password',
        'HOST': '127.0.0.1',
        'OPTIONS': {
            'autocommit': True
        }
    }
}