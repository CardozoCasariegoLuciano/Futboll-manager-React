import React from 'react';
import EquipoSeleccionado from './components/EquipoSeleccionado';
import Jugadores from './components/Jugadores';

import './styles/styles.scss'


const App = () => {
  return (  

      <main className="container">
        <h1>Futbol manager</h1>
        <Jugadores/>
        <EquipoSeleccionado/>
      </main>
  );
}
 
export default App;



