import requests

name = input("Enter Pokemon Name: ")

url = f"https://pokeapi.co/api/v2/{name.lower()}/"
response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    print(f"Name: {data['name']}")
    print(f"Height: {data['height']}")
    print(f"Weight: {data['weight']}")
else:
    print("Pokemon not found.")
    