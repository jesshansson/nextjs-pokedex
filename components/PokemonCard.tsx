import Link from "next/link";

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
    <>
      <article
        style={{
          border: "1px solid #ddd",
          padding: 16,
          borderRadius: 12,
          maxWidth: 320,
        }}
        className="flex-col justify-center items-center"
      >
        <h2
          style={{ textTransform: "capitalize" }}
          className="text-2xl text-center"
        >
          {name}
        </h2>
        <div className="items-center">
          <img src={image} alt={name} width={150} height={150} />
        </div>
        <p>
          Type: <strong> {typeName}</strong>
        </p>
      </article>
    </>
  );
}
