export function renderPokemon(pokemon) {
    const pSprite = pokemon.sprites.front_default;
    const pName = pokemon.name;
    const pHeight = pokemon.height;
    const pTypes = pokemon.types.map(t => t.type.name);

    const card = document.createElement("div");

    const sprite = document.createElement("img");
    sprite.src = pSprite;

    const name = document.createElement("p");
    name.textContent = `Name: ${pName}`;

    const height = document.createElement("p");
    height.textContent = `Height: ${pHeight}`;

    const typesContainer = document.createElement("div");
    const typesLabel = document.createElement("p");
    typesLabel.textContent = "Types:";

    pTypes.forEach(type => {
        const badge = document.createElement("span");
        badge.textContent = type;

        badge.style.backgroundColor = typeColors[type];

        typesContainer.appendChild(badge);
    })
    
    card.append(sprite);
    card.appendChild(name);
    card.appendChild(height);
    card.appendChild(typesLabel);
    card.appendChild(typesContainer);

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