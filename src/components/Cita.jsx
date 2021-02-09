import React, {Fragment} from 'react'

const Citas = ({cita, citas, setCitas}) => {
  const {mascota, propietario, fecha, hora, sintomas, id} = cita;

  // Remove cita
  const removeCita = id => {
    const newCitas = citas.filter(item => item.id !== id);
    setCitas([...newCitas]);
  }

  return (
    <Fragment>
      <div className='cita'>

        <p>Mascota: <span>{mascota}</span></p>
        <p>Propietario: <span>{propietario}</span></p>
        <p>Fecha: <span>{fecha}</span></p>
        <p>Hora: <span>{hora}</span></p>
        <p>Sintomas: <span>{sintomas}</span></p>
        
        <button className='button eliminar' onClick={() => removeCita(id)}>Remove</button>
      </div>    
    </Fragment>
  )
}

export default Citas
