import React, { useState } from 'react';
import ViewUser from './components/ViewUser';
import EditUser from './components/EditUser';

import './App.css';


const App = () => {
  const initialUserInfo = { name: 'Luis', lastName: 'Gutierrez', role: 'teacher' };
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const [editing, setEditing] = useState(false);

  return (
    <div className="App">
      {editing ? (
        <EditUser userInfo={userInfo} setUserInfo={setUserInfo} setEditing={setEditing} />
      ) : (
        <ViewUser userInfo={userInfo} setEditing={setEditing} />
      )}
    </div>
  );
};

export default App;

