**09/03/2026**

- Created a python file to test the retrieval of api using python.
- Created a html and js file. Current functionality is an input box that once the user enters text it will display whatever text is inputted.

Objective today:
[x] Succesfully pull data from api
[x] link user input to pull data


Creating an function 'getPokemon' that is going to retrieve data from the PokeApi.
Upon research fetch() is the modern standard for api calls. In addtion the function that calls fetch should be asynchronous. I've just read that api calls are typically put in a seperate folder, so I've created 'api.js'

Testing the command in the console. I was encountering the 'Uncaught ReferenceError: getPokemon is not defined' as I had not put the new file in html file.

Function now works, for testing I've set a predefined pokemon and in the console I've succesfully called the command and the correct info has been returned.

[Push] Add fetch function and confirm API request works

Changed function from 'getPokemon' to 'fetchPokemon'
Going to change the function so that the function parameter determines what pokemon to pull. The api works in lowercase so will need to ensure input is lowered. Also need some fault tolerance, e.g. error codes if an invalid pokemon is entered, or something else goes wrong.

API calls need/should be wrapped in a try...catch especially when using async/await. Using 'if (!response.ok)' we can check if the connection with the PokeAPI was succesful but our input was wrong.
The catch, catches errors where the api call was not succesful.

Call was succesful, entering a valid pokemon returns it's information.

When pokemon is invalid 'Pokemon not found' error is returned

[Push] Add parameter handling and implement try-catch error handling.

Next objective is to link the input field on the html page to the fetchPokemon function.

Imported the api.js into main.js.
Removed lower-case command from the fetchPokemon() function as input will handled/checked by handleSearchClick().

Encountering an import error:
'Uncaught SyntaxError: Cannot use import statement outside a module'

This error was caused by the way I was loading my script in the HTML file. I've since added 'type="module"' which makes the browser allow imports or exports. Also needed to make the fetchPokemon() exportable with the 'export' key.

Input field now works as intended, you can search a pokemon as its data is logged in the console.

[Push] Connect search input to PokeAPI and fetch Pokémon data

**10/03/2026**

Objective:
[x] Print fetched data to html page (unformatted)
[ ] Nicely format web page
[ ] Add a spritie of the image
[ ] Create a header where user's can search

In order to print the data, I first need to know what data I want to display. This will mean working with json to extrat/format the data I want. Therefore my first task will be to pick out data from the api call we have in console.
Had to alter the handleSearchClicker. I had to change the function to be async and wait for the fetch command, otherwise there won't acutally be data for it to retrieve due to how requests and async calls work. I've for now printed the stringify of json to the html page. Looks a mess but it's the correct data which is what I'm more concerend about. Now I have to detmerine what data i want to display.

**11/03/2026**
Objective:
[ ] Nicely format web page, displaying a few key information

I've got the web page to display the whole stringify, but of course it looks very messy and unreadable, so today will polish up that input.
My plan is to make a function that specifcally displays the content, creating a set template that can be reused. I will have to determine where this is put though. As it is a dynamic element for the web page I feel like it should be on the main.js as that handles the dynamic content.

I'm currently reviewing the structure of the project, ensuring that I can make a well structured future proof structure.
Flow Diagram of the strucutre of the user request
User input
     ↓
main.js
     ↓
api.js
     ↓
Pokemon data returned
     ↓
ui.js
     ↓
render pokemon card

For the types element of a pokemon, it is often the case that some pokemon have multiple types and therefor the object returns a list. I discovered that there's too ways to do so, foreach() or map().
This is the foreach way. Upon reading online, for each is often used to perform side effects like logging or updating values
const types = [];

pokemon.types.forEach(t => {
    types.push(t.type.name);
});

This is the map() which is used for transforming data and and returns a new array, leaving the original unchanged

const types = pokemon.types.map(t => t.type.name);

The map() follows my use case more here.

Created a container in the renderPokemon(), that is then returned to main.js where the content is then appended to the pokemonDisplay body.

[Push] Render Pokémon details (name, height, types) in UI