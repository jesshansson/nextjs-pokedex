const BASE_URL = "https://pokeapi.co/api/v2";

export async function getPokemon(nameOrId:string | number) {
const res = await fetch(
    `${BASE_URL}/pokemon/${String(nameOrId).toLowerCase()}`
  );

  if (!res.ok) {
    throw new Error("Could not fetch Pokémon")
  }

  const data = await res.json()
  return data;
}

export async function getRandomPokemonIds(count: number) {
  const maxPokemonId = 151; //Pokémon 1-151
  const ids = new Set<number>();

  while (ids.size < count) {
    const randomId = Math.floor(Math.random() * maxPokemonId) + 1;
    ids.add(randomId);
  }

  return Array.from(ids);
}