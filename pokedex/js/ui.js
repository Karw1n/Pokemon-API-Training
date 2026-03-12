export function renderPokemon(pokemon) {
    const p_sprite = pokemon.sprites.front_default;
    const p_name = pokemon.name;
    const p_height = pokemon.height;
    const p_types = pokemon.types.map(t => t.type.name);

    const card = document.createElement("div");

    const sprite = document.createElement("img");
    sprite.src = pokemon.sprites.front_default;

    const name = document.createElement("p");
    name.textContent = `Name: ${p_name}`;

    const height = document.createElement("p");
    height.textContent = `Height: ${p_height}`;

    const types_container = document.createElement("div");
    const types_label = document.createElement("p");
    types_label.textContent = "Types:";

    p_types.forEach(type => {
        const badge = document.createElement("span");
        badge.textContent = type;

        badge.style.backgroundColor = typeColors[type];

        types_container.appendChild(badge);
    })
    
    card.append(sprite);
    card.appendChild(name);
    card.appendChild(height);
    card.appendChild(types_label);
    card.appendChild(types_container);

    return card
}

const typeColors = {
    fire: "#F08030",
    water: "#6890F0",
    grass: "#78C850",
    electric: "#F8D030",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    fairy: "#EE99AC"
};