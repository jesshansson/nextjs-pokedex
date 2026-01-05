export default function SearchForm() {
  return (
    <form
      action="/search-results"
      method="GET"
      style={{ display: "flex", gap: 8 }}
    >
      <input
        name="q"
        placeholder="Search Pokémon (e.g. pikachu)"
        style={{
          padding: "10px 12px",
          borderRadius: 8,
          border: "1px solid #ccc",
        }}
      />
      <button type="submit" className="btn-primary">
        Search
      </button>
    </form>
  );
}
