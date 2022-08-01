export function SearchBar ({ setSearch }) {
  return (
    <input
      placeholder='search here...'
      onChange={event => {
        setSearch(event.target.value)
      }}
    />
  )
}
