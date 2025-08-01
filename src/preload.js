const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

global.getUsuarios = () => {
  const usuariosPath = path.join(__dirname, 'data', 'usuarios.json');
  const data = fs.readFileSync(usuariosPath, 'utf8');
  return JSON.parse(data);
};

global.validarUsuario = async (nombre, password) => {
  const usuarios = global.getUsuarios();

  for (const u of usuarios) {
    if (u.nombre === nombre) {
      const match = await bcrypt.compare(password, u.password);
      if (match) return true;
    }
  }

  return false;
};
