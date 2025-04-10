import { useState } from 'react';
import ProductCard from './components/ProductCard/ProductCard.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx'; 
import Header from './components/Header/Header.jsx'; 
import Footer from './components/Footer/Footer.jsx'

const productos = [
  { id: 1, nombre: "Camiseta", precio: 9.99, imagen: "https://picsum.photos/150" },
  { id: 2, nombre: "Pantalón", precio: 19.99, imagen: "https://picsum.photos/151" }, 
  { id: 3, nombre: "Camiseta", precio: 29.99, imagen: "https://picsum.photos/152" },
  { id: 4, nombre: "Pantalón", precio: 39.99, imagen: "https://picsum.photos/153" },
  { id: 5, nombre: "Camiseta", precio: 49.99, imagen: "https://picsum.photos/154" },
  { id: 6, nombre: "Pantalón", precio: 59.99, imagen: "https://picsum.photos/155" },
  { id: 7, nombre: "Camiseta", precio: 69.99, imagen: "https://picsum.photos/156" },
  { id: 8, nombre: "Pantalón", precio: 79.99, imagen: "https://picsum.photos/157" },
  
  
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredProducts = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return ( 
    <> 
    <Header /> 

      <div>
        <SearchBar onSearch={setSearchQuery} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-[2%]">
          {filteredProducts.length ? (
            filteredProducts.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))
          ) : (
            <p>No hay resultados</p>
          )}
        </div>
      </div> 

      <Footer /> 
      
    </>
  );
}

export default App;
