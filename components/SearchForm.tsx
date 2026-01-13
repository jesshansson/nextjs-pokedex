export default function SearchForm() {
  return (
    <form
      action="/search-results"
      method="GET"
      className="flex flex-col max-w-sm sm:flex-row gap-3 items-center"
    >
      <input
        name="q"
        placeholder="Search Pokémon (e.g. pikachu)"
        className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />
      <button
        type="submit"
        className="btn-primary mt-4 sm:mt-0 px-6 py-2 text-white rounded-lg"
      >
        Search
      </button>
    </form>
  );
}
