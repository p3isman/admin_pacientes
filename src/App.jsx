import React, { Fragment, useState } from 'react';
import Form from './components/Form';
import Cita from './components/Cita';

function App() {
  // Array of Citas
  const [citas, setCitas] = useState([]);

  // Function to add cita
  const addCita = cita => {
    setCitas([...citas, cita]);
  }

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
            <h2>Administra tus citas</h2>
            {citas.map(cita => (
              <Cita 
                cita={cita}
                citas={citas}
                setCitas={setCitas}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
