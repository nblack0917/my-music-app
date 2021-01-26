import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const Login = (props) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [hasName, setHasName] = useState(false)
    const [hasPass, setHasPass] = useState(false)

    const handleUserChange = (e) => {
        setUserName(e.target.value)
        if(hasName) {
            setHasName(!hasName)
        }
    }
    
    const handlePassChange = (e) => {
        setPassword(e.target.value)
        if(hasPass) {
            setHasPass(!hasPass)
        }
    }

    const checkLogin = () => {
        if(!userName || ! password) {
            if(!userName) {
                setHasName(!hasName)
            }
            if(!password) {
                setHasPass(!hasPass)
            }
        }else if(userName && password) {
            props.handleLogin(userName)
        }
    }

    return (
        <div className="loginContainer" style={{ textAlign:"center" }}>
            <TextField required error={hasName} id="userName" value={userName} onChange={handleUserChange} placeholder="User Name *" />
            <br /><br />
            <TextField required error={hasPass} id="password" value={password} onChange={handlePassChange} placeholder="Password *" />
            <br /><br />
            <Button variant="contained" color="Primary" onClick={checkLogin}>Login</Button>
        </div>
    )
}

export default Login
