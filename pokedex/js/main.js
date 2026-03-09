import { fetchPokemon } from "./api.js";

const searchInput = document.getElementById("search-pokemon-input");
const searchButton = document.getElementById("search-pokemon-button");
const displayDiv = document.getElementById("display-pokemon");

function handleSearchClick() {
    const userValue = searchInput.value.trim().toLowerCase();

    console.log(fetchPokemon(userValue));
    // Displays the userValue
    displayDiv.textContent = userValue;
}


// No parentheses means it will wait to run, as opposed to running immediately
searchButton.addEventListener("click", handleSearchClick);