
// Componente reutilizable Button
export function Button({ color, children }) {
  return (
    <button
      className={`p-2 rounded-lg transition duration-200 ${color === 'blue' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-green-500 hover:bg-green-600'}`}
    >
      {children}
    </button>
  );
}

// Uso del componente con diferentes colores:
export function ButtonBlue() {
  return <Button color="blue">Botón Azul</Button>;
}

export function ButtonGreen() {
  return <Button color="green">Botón Verde</Button>;
}

  