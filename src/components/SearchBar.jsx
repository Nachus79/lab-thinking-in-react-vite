function SearchBar({ setProductSearch }) {
  return (
    <div>
      <label>Seach</label>
      <br/>
      <input type="text" onChange={(e) => setProductSearch(e.target.value)} />
    </div>
  );
}
export default SearchBar;
