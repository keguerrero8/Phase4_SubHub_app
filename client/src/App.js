import './index.css';
import React, { useState, useEffect } from 'react';
import HomePage from './HomePage';
import Header from './Header';
import Login from './Login';


function App({theme}) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  if (!user) return <Login setUser={setUser} theme={theme}/>;

  return (
    <>
        <Header setUser={setUser} theme={theme}/>
        <HomePage user={user} theme={theme}/>
    </>
  );
}

export default App;