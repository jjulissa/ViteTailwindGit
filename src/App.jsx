// App.jsx
import { useState } from 'react';
import ProductCard from './components/ProductCard/ProductCard.jsx';
import SearchBar from './SearchBar/SearchBar.jsx';

const productos = [
  { id: 1, nombre: "Camiseta", precio: 19.99, imagen: "https://picsum.photos/150" },
  { id: 2, nombre: "Pantalón", precio: 29.99, imagen: "https://picsum.photos/151" }, 
  { id: 3, nombre: "Camiseta", precio: 19.99, imagen: "https://picsum.photos/152" },
  { id: 4, nombre: "Pantalón", precio: 29.99, imagen: "https://picsum.photos/153" },
  { id: 5, nombre: "Camiseta", precio: 19.99, imagen: "https://picsum.photos/154" },
  { id: 6, nombre: "Pantalón", precio: 29.99, imagen: "https://picsum.photos/155" },
  { id: 7, nombre: "Camiseta", precio: 19.99, imagen: "https://picsum.photos/156" },
  { id: 8, nombre: "Pantalón", precio: 29.99, imagen: "https://picsum.photos/157" },
  
  
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredProducts = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchBar onSearch={setSearchQuery} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.length ? (
          filteredProducts.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))
        ) : (
          <p>No hay resultados</p>
        )}
      </div>
    </div>
  );
}

export default App;
