import { getPokemon } from "@/lib/pokeapi";
import { notFound } from "next/navigation";

export default async function PokemonDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  try {
    const pokemon = await getPokemon(id);
    const types = pokemon.types.map((t: any) => t.type.name);

    return (
      <main style={{ padding: 24 }}>
        <h1 style={{ textTransform: "capitalize" }}>{pokemon.name}</h1>

        {pokemon.sprites.front_default ? (
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width={200}
            height={200}
          />
        ) : null}

        <p>
          <strong>Types:</strong> {types.join(", ")}
        </p>
      </main>
    );
  } catch {
    notFound();
  }
}
