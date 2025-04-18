function SearchBar({ onSearch }) { 
  
    return (
      <input
        type="text"
        placeholder="Buscar productos..."
        onChange={(e) => onSearch(e.target.value)}
        className="border p-2 rounded-lg m-[5%] w-[90%]"
      />
    );
  }
  
  export default SearchBar; 

  