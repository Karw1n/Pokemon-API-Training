const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export async function fetchPokemon(pokemonName) {
    try {
        const response = await fetch(`${BASE_URL}/${pokemonName}/`);
        
        // Request valid but input is not
        if (!response.ok) {
            throw new Error("Pokemon not found");
        }
        const data = await response.json();
        return data;
    
    } catch (error) {
        console.error(error);
    }
}
