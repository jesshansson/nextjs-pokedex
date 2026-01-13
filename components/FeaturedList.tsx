import PokemonCard from "./PokemonCard";
import { getPokemon, getRandomPokemonIds } from "@/lib/pokeapi";

export default async function FeaturedList() {
  const ids = await getRandomPokemonIds(4);

  const pokemons = await Promise.all(ids.map((id) => getPokemon(id)));

  return (
    <section className="w-full px-4">
      <div className=" flex flex-wrap gap-4 justify-center items-center ">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            typeName={pokemon.types[0].type.name}
          />
        ))}
      </div>
    </section>
  );
}
