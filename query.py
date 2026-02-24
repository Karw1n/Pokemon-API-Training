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
    print(f"Sprite URL: {data['sprites']['front_default']}")
elif response.status_code == 404:
    print("Pokemon not found.")
elif response.status_code == 500:
    print("Internal server error.")
else:
    print(f"An error occurred. Status code: {response.status_code}")


