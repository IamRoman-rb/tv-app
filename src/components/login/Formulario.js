import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../css/login.css';

export const Formulario = () => {
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState('');
  let img = '/imgs/login_img.jpg';

  const validar = async (e) => {

    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const password = document.getElementById('password').value.trim();

    const valido = await window.validarUsuario(nombre, password); // o global.validarUsuario

    if (valido) {
      navigate('/panel');
    } else {
      setMensaje('Nombre o contraseña incorrectos');
    }
  };

  return (
    <section>
      <figure>
        <img src={img} alt='Switcher' />
      </figure>
      <form onSubmit={validar}>
        <h1>Bienvenido</h1>
        <p className="mensaje">{mensaje}</p>
        <fieldset>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" name="nombre" id="nombre" />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" />
        </fieldset>
        <fieldset className='button'>
          <button type='submit'>Iniciar Sesión</button>
        </fieldset>
      </form>
    </section>
  );
};
