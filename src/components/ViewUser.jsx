import React from 'react';

const ViewUser = ({ userInfo, setEditing }) => {
  return (
    <div>
      <h2>Información del Usuario</h2>
      <p>Nombre: {userInfo.name}</p>
      <p>Apellido: {userInfo.lastName}</p>
      <p>Rol: {userInfo.role}</p>
      <button onClick={() => setEditing(true)}>Editar</button>
    </div>
  );
};

export default ViewUser;
