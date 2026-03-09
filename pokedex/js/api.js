async function fetchPokemon(pokemonName) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}/`);
        
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
