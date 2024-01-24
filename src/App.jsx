import React, { useEffect, useState } from 'react'
import UserTable from './components/UserTable'
import AddUserForm from './components/AddUserForm'
import EditUserForm from './components/EditUserForm'
import firebase from "./firebase";

const App = () => {
  
  console.log(process.env.REACT_APP_SITE);

  // https://www.geeksforgeeks.org/how-to-use-firestore-database-in-reactjs/
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("users")
      .onSnapshot(snapshot => {
        const newUsers = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setUsers(newUsers);
      });
    return () => unsubscribe();
  }, []);


  const addUser = (user) => {
    // user.id = users.length + 1
    // setUsers([...users, user])

    firebase.firestore().collection("users").add({    
      name: user.name,
      username: user.username,
    })
    .then( (docRef) => {console.log("Data sucessfuly submitted")})
    .catch( (error) => {
      console.log("Error adding document:", error);
    });


  }

  const deleteUser = (id) => {
    // setUsers(users.filter((user) => user.id !== id));
    firebase.firestore().collection("users").doc(id).delete();
  }

  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: '', username: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const editRow = (user) => {
    setEditing(true)
  
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
  
    // setUsers(users.map((user) => (user.id === id ? updatedUser : user)));

    firebase.firestore().collection("users").doc(id).update({
      name: updatedUser.name,
      username: updatedUser.username,
    });

  }

  return (
    <div className="container">
      <h1>{process.env.REACT_APP_SITE}</h1>
      <div className="flex-row">

        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>

        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  )
}

export default App