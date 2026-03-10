import { fetchPokemon } from "./api.js";

const searchInput = document.getElementById("search-pokemon-input");
const searchButton = document.getElementById("search-pokemon-button");
const displayDiv = document.getElementById("display-pokemon");

async function handleSearchClick() {
    const userValue = searchInput.value.trim().toLowerCase();
    const pokemon = await fetchPokemon(userValue);
    console.log(pokemon);
    console.log(pokemon.name);
    // Displays the userValue
    displayDiv.textContent = JSON.stringify(pokemon);
}


// No parentheses means it will wait to run, as opposed to running immediately
searchButton.addEventListener("click", handleSearchClick);