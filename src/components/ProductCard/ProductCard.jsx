import React, { useState } from 'react'; 

function ProductCard({ producto }) {
    const [likes, setLikes] = useState(0);
  
    return (
      <div className="border p-4 rounded-lg flex flex-col items-center">
        <img className='w-[90%]' src={producto.imagen} alt={producto.nombre} />
        <div> 
          <h3>{producto.nombre}</h3>
          <p>${producto.precio}</p> 
        </div> 
        <button onClick={() => setLikes(likes + 1)} className="bg-orange-600 text-white p-2 rounded-lg hover:bg-cyan-500 w-[70%]">
          Me gusta ({likes})
        </button>
      </div>
    );
  }
  
  export default ProductCard;
  


  