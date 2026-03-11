import { fetchPokemon } from "./api.js";
import { renderPokemon } from "./ui.js";

const searchInput = document.getElementById("search-pokemon-input");
const searchButton = document.getElementById("search-pokemon-button");
const displayDiv = document.getElementById("display-pokemon");

async function handleSearchClick() {
    const userValue = searchInput.value.trim().toLowerCase();
    const pokemon = await fetchPokemon(userValue);
    console.log(pokemon);
    console.log(pokemon.name);

    const pokemonCard = renderPokemon(pokemon);
    displayDiv.replaceChildren(pokemonCard);
}


// No parentheses means it will wait to run, as opposed to running immediately
searchButton.addEventListener("click", handleSearchClick);