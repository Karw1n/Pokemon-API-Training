import requests

name = input("Enter Pokemon Name: ")

url = f"https://pokeapi.co/api/v2/pokemon-species/{name.lower()}/"
response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    print(f"Name: {data['name']}")
    print(f"Id: {data['id']}")
    print(f"Generation: {data['generation']['name']}")
    # print(f"Pokemon Entries: {data['pokemon_entries']}")
else:
    print("Pokemon not found.")
    