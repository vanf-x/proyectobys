import React from 'react'
import { Link } from 'react-router-dom'
const RecuperarContrasena = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center'>
      <h1>Recuperar Contraseña</h1>
      <button className='w-1/5 bg-[#006DA4] text-white p-2 rounded-lg'>Enviar</button>
      <Link to="/login" className="w-1/5 text-[#006DA4] p-2 rounded-lg">
              Volver
              </Link>
    </div>
  )
}

export default RecuperarContrasena
