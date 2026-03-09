async function getPokemon() {
    const name = "snivy";
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    const data = await response.json();

    console.log(data);
}
