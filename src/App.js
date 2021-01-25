import React, { useState } from 'react';
import './App.css';
import TopAppBar from './components/TopAppBar'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

const App = () => {
  const [loggedIn, setLogin] = useState(false)

  const handleLogin = () => {
      setLogin(!loggedIn)
      console.log("click")
  }

  // return (
  //   <div className="App">
  //     <Login handleLogin={e => handleLogin(e)}/>
  //   </div>
  // );

  return loggedIn ? (
    <div>
      <TopAppBar />
      <Dashboard />
    </div>
    ) :
    (
      <div>
        <TopAppBar />
        <Login handleLogin={e => handleLogin(e)}/>
      </div>
    )
}

export default App;
