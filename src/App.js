import React, { useState } from 'react';
import AddUser from './Components/User/AddUser'
import UserList from './Components/User/UserList'



function App() {

  const [userData, setUserData] = useState([])

  const handleUserData = (uName, uAge) => {
    setUserData((prevUser) => {
        return [...prevUser, {name:uName, age:uAge, id: Math.random().toString()}]
    })
  }


  return (
    <div>
      <AddUser onUserChange={handleUserData}/>
      <UserList users={userData} />
    </div>
  );
}

export default App;
