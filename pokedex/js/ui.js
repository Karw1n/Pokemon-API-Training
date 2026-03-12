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

    const types = document.createElement("p")
    types.textContent = `Types: ${p_types.join(", ")}`;

    card.append(sprite);
    card.appendChild(name);
    card.appendChild(height);
    card.appendChild(types);

    return card
}
