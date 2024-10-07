import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from './Game';  // Asegúrate de que Game está bien importado
import './index.css';  // Opcional si tienes algún CSS para estilos globales

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Game />  {/* Aquí renderizas el componente Game */}
  </React.StrictMode>
);
