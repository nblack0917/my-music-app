import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const Login = (props) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleUserChange = (e) => {
        setUserName(e.target.value)
    }
    const handlePassChange = (e) => {
        setPassword(e.target.value)
    }

    const checkLogin = () => {
        if(userName, password) {
            props.handleLogin(userName)
        }
    }

    return (
        <div className="loginContainer" style={{ textAlign:"center" }}>
            <TextField required id="userName" value={userName} onChange={handleUserChange} placeholder="User Name *" />
            <br /><br />
            <TextField required id="password" value={password} onChange={handlePassChange} placeholder="Password *" />
            <br /><br />
            <Button variant="contained" color="Primary" onClick={checkLogin}>Login</Button>
        </div>
    )
}

export default Login
