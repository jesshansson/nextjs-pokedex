import { notFound } from "next/navigation";
import { getPokemon } from "@/lib/pokeapi";
import PokemonCard from "@/components/PokemonCard";

export default async function SearchResultsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  if (!q) notFound();

  try {
    const pokemon = await getPokemon(q.toLowerCase().trim());

    return (
      <main style={{ padding: 24 }}>
        <h1 style={{ fontSize: 28, marginBottom: 16 }}>
          Search result for:{" "}
          <span style={{ textTransform: "capitalize" }}>{q}</span>
        </h1>

        <PokemonCard
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          typeName={pokemon.types?.[0]?.type?.name ?? "unknown"}
        />
      </main>
    );
  } catch {
    // If no Pokemon or API fail
    notFound();
  }
}
