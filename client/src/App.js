import './index.css';
import React, { useState, useEffect } from 'react';
import HomePage from './HomePage';
import Header from './Header';
import Login from './Login';


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  if (!user) return <Login setUser={setUser}/>;

  return (
    <>
        <Header setUser={setUser}/>
        <HomePage user={user}/>
    </>
  );
}

export default App;