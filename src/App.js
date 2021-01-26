import React, { useState } from 'react';
import './App.css';
import TopAppBar from './components/TopAppBar'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

const App = () => {
  const [loggedIn, setLogin] = useState(false)
  const [userName, setUserName] = useState('')

  const handleLogin = (name) => {
      setLogin(!loggedIn)
      console.log("click")
      setUserName(name)
  }

  // return (
  //   <div className="App">
  //     <Login handleLogin={e => handleLogin(e)}/>
  //   </div>
  // );

  return loggedIn ? (
    <div>
      <TopAppBar />
      <Dashboard name={userName} />
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
