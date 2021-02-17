import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Cita from './components/Cita';

function App() {
  // Retrieve citas from local storage
  let initialCitas = JSON.parse(localStorage.getItem('citas'));

  // Array of Citas
  const [citas, setCitas] = useState(initialCitas);

  useEffect(() => localStorage.setItem('citas', JSON.stringify(citas)), [citas]);
  
  // Add cita
  const addCita = cita => {
    setCitas([...citas, cita]);
  }

  // Remove cita
  const removeCita = id => {
    const newCitas = citas.filter(cita => cita.id !== id);
    setCitas([...newCitas]);
  }

  // Title
  const titulo = citas.length === 0 ? 'No tienes citas' : 'Administra tus citas';


  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Form 
              addCita={addCita}
            />
          </div>
          <div className='one-half column'>
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
                cita={cita}
                removeCita={removeCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
