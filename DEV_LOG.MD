**Current Progress 09/03/2026**

- Created a python file to test the retrieval of api using python.
- Created a html and js file. Current functionality is an input box that once the user enters text it will display whatever text is inputted.

Objective today:
[x] Succesfully pull data from api
[] link user input to pull data


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
