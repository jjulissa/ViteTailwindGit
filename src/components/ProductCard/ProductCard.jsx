import React, { useState } from 'react'; 

function ProductCard({ producto }) {
    const [likes, setLikes] = useState(0);
  
    return (
      <div className="border p-4 rounded-lg">
        <img src={producto.imagen} alt={producto.nombre} />
        <h3>{producto.nombre}</h3>
        <p>${producto.precio}</p>
        <button onClick={() => setLikes(likes + 1)} className="bg-blue-500 p-2 rounded-lg hover:bg-blue-600">
          Me gusta ({likes})
        </button>
      </div>
    );
  }
  
  export default ProductCard;
  


  