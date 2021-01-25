import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const Login = (props) => {
    const [loggedIn, setLogin] = useState("false")

    return (
        <div className="loginContainer" style={{ textAlign:"center" }}>
            <TextField  placeholder="User Name" />
            <br /><br />
            <TextField  placeholder="Password" />
            <br /><br />
            <Button variant="contained" color="Primary" onClick={props.handleLogin}>Login</Button>
        </div>
    )
}

export default Login
