**Current Progress 09/03/2026**

- Created a python file to test the retrieval of api using python.
- Created a html and js file. Current functionality is an input box that once the user enters text it will display whatever text is inputted.

Objective today:
- Succesfully pull data from api
- link user input to pull data


Creating an function 'getPokemon' that is going to retrieve data from the PokeApi.
Upon research fetch() is the modern standard for api calls. In addtion the function that calls fetch should be asynchronous. I've just read that api calls are typically put in a seperate folder, so I've created 'api.js'

Testing the command in the console. I was encountering the 'Uncaught ReferenceError: getPokemon is not defined' as I had not put the new file in html file.

Function now works, for testing I've set a predefined pokemon and in the console I've succesfully called the command and the correct info has been returned.