import React, { useState } from 'react';

const EditUser = ({ userInfo, setUserInfo, setEditing }) => {
  const [formData, setFormData] = useState(userInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo(formData);
    setEditing(false);
  };

  return (
    <div>
      <h2>Editar Información del Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Apellido:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Rol:
          <input type="text" name="role" value={formData.role} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Guardar</button>
      </form>
      <button onClick={() => setEditing(false)}>Cancelar</button>
    </div>
  );
};

export default EditUser;
