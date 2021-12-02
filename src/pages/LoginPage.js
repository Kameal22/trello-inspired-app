import React, {useContext, useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {Link, useHistory} from "react-router-dom";
import {AuthContext} from "../contexts/AuthContext";
import useInputState from "../hooks/useInputState";
import {login} from "../services/auth-service";

const LoginPage = () => {
    const history = useHistory();
    const {token, handleChangingToken} = useContext(AuthContext);
    const [username, updateUsername, resetUsername, usernameError, setUsernameError] = useInputState("");
    const [password, updatePassword, resetPassword, passwordError, setPasswordError] = useInputState("");
    const [authError, setAuthError] = useState(false);

    const handleLogin = e => {
        e.preventDefault();
        const credentials = {
            username: username,
            password: password
        };
        login(credentials)
            .then(handleChangingToken)
            //TODO: do it better?
            .then(() => setAuthError(false))
            .then(() => history.push("/main-page"))
            .catch(() => setAuthError(true));
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                background: 'linear-gradient(0deg, rgba(252,252,252,1) 0%, rgba(207,205,226,0.788953081232493) 71%)'
            }}
        >
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" onSubmit={handleLogin} noValidate sx={{mt: 1}}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    error={authError}
                    value={username}
                    onChange={updateUsername}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    error={authError}
                    value={password}
                    onChange={updatePassword}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                >
                    Sign In
                </Button>
                <Link to={'/register'} style={{textDecoration: 'none'}}>
                    <Button
                        fullWidth
                        variant="outlined"
                        sx={{mt: 1, mb: 2}}
                    >
                        Register
                    </Button>
                </Link>
            </Box>
        </Box>
    );
};

export default LoginPage;