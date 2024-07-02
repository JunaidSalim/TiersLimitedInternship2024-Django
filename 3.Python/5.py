# Task 5: Develop a Python script that uses the ‘requests‘ library to fetch data from
# an API (such as a weather API) and parse the JSON response. Display specific
# information from the response in a readable format.

import requests

api_key = '13fd5b6c06500b74d8d0aefc0d9ae077'
city = 'Peshawar'
url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric'

response = requests.get(url)
data = response.json()

if response.status_code == 200:
    city_name = data['name']
    weather_description = data['weather'][0]['description']
    temperature = data['main']['temp']
    humidity = data['main']['humidity']
    wind_speed = data['wind']['speed']

    print(f"City: {city_name}")
    print(f"Weather: {weather_description}")
    print(f"Temperature: {temperature}°C")
    print(f"Humidity: {humidity}%")
    print(f"Wind Speed: {wind_speed} m/s")
else:
    print("Failed to fetch data from the API.")

