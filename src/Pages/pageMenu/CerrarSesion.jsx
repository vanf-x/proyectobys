import React from 'react'
import { NavLink } from 'react-router-dom'

const CerrarSesion = () => {
  return (
    <div>
      <h1>Sesión cerrada con éxito</h1>
      <NavLink 
      to="/login"
      className="bg-[#006DA4] p-1 text-white">
        Ir al login
        </NavLink>
    </div>
  )
}

export default CerrarSesion
