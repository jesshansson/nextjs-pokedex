type PokemonCardProps = {
  name: string;
  image: string;
  typeName: string;
};

export default function PokemonCard({
  name,
  image,
  typeName,
}: PokemonCardProps) {
  return (
    <article
      style={{
        border: "1px solid #ddd",
        padding: 16,
        borderRadius: 12,
        maxWidth: 320,
      }}
    >
      <h2 style={{ textTransform: "capitalize" }}>{name}</h2>

      <img src={image} alt={name} width={150} height={150} />

      <p>
        Type: <strong>{typeName}</strong>
      </p>
    </article>
  );
}
