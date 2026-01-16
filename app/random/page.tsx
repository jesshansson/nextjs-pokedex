import Link from "next/link";
import { redirect } from "next/navigation";

export default function RandomPage() {
  const maxPokemonId = 151;
  const randomId = Math.floor(Math.random() * maxPokemonId) + 1;

  redirect(`/pokedex/${randomId}`);
}
