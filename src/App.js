import React, { useState } from 'react';
import './App.css';
import Login from './components/Login'

const App = () => {
  const [loggedIn, setLogin] = useState(false)

  const handleLogin = () => {
      setLogin(!loggedIn)
      console.log("click")
  }

  return (
    <div className="App">
      <Login handleLogin={e => handleLogin(e)}/>
    </div>
  );

  return this.state.loggedIn ? (
    <TopAppBar />
    <Dashboard />
    ) :
    (
      <TopAppBar />
      <Login />
    )
}

export default App;
