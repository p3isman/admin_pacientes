import React, { Fragment, useState } from 'react';
import {v4 as uuidv4} from 'uuid';

const Form = ({addCita}) => {
  // Citas initial this.state.
  const initialState = {
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  }

  // Citas state
  const [cita, setCita] = useState(initialState);

  // Form validation
  const [error, setError] = useState(false);

  const updateCita = e => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  // Access field values to reset them on submit
  const {mascota, propietario, fecha, hora, sintomas} = cita;

  // On submit
  const submitCita = e => {
    // Prevent GET method on submit
    e.preventDefault();

    // Validation
    if (mascota === '' || propietario === '' || fecha === '' || hora === '' ||
      sintomas === '') {
        setError(true);
        return;
      }
    
    // Delete error message
    setError(false);

    // Assign ID
    cita.id = uuidv4();

    // Create cita
    addCita(cita);

    // Reset fields
    setCita(initialState);
  }

  return (
    <Fragment>
      <h2>Crear cita</h2>

      {error ? <p className='alerta-error'>Todos los campos son obligatorios</p> : null}

      <form
        onSubmit={submitCita}
      >
        <label>Nombre Mascota</label>
        <input
          type='text'
          name='mascota'
          className='u-full-width'
          placeholder='Nombre de la mascota'
          onChange={updateCita}
          value={mascota}
        />
        <label>Nombre Dueño</label>
        <input
          type='text'
          name='propietario'
          className='u-full-width'
          placeholder='Nombre del dueño'
          onChange={updateCita}
          value={propietario}
        />
        <label>Fecha</label>
        <input 
          type='date' 
          name='fecha'
          className='u-full-width'
          onChange={updateCita}
          value={fecha}
        />
        <label>Hora</label>
        <input 
          type='time' 
          name='hora' 
          className='u-full-width' 
          onChange={updateCita}
          value={hora}
        />
        <label>Síntomas</label>
        <textarea 
          name='sintomas' 
          className='u-full-width' 
          onChange={updateCita}
          value={sintomas}
        />
        <button 
          type='submit' 
          className='u-full-width button-primary'>
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
