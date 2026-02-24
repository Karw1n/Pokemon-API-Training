import requests

name = input("Enter Pokemon Name: ")

url = f"https://pokeapi.co/api/v2/pokemon/{name.lower()}/"
response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    # print(data)
    print(f"Name: {data['name']}")
    print(f"Id: {data['id']}")   
    print(f"Types: {[type['type']['name'] for type in data['types']]}") 
    sprite_urls = [val for val in data['sprites'].values() if val is not None and isinstance(val, str)]
    print(f"Sprite URLs: {sprite_urls}")
elif response.status_code == 404:
    print("Pokemon not found.")
elif response.status_code == 500:
    print("Internal server error.")
else:
    print(f"An error occurred. Status code: {response.status_code}")


