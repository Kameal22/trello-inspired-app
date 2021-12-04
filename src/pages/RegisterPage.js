import React, {useContext, useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {Link, useHistory} from "react-router-dom";
import {AuthContext} from "../contexts/AuthContext";
import useInputState from "../hooks/useInputState";
import {register} from "../services/auth-service";

const RegisterPage = () => {
    const history = useHistory();
    const {token, changeToken} = useContext(AuthContext);
    const [username, updateUsername, resetUsername, usernameError, setUsernameError] = useInputState("");
    const [password, updatePassword, resetPassword, passwordError, setPasswordError] = useInputState("");
    const [name, updateName] = useInputState("");
    const [surname, updateSurname] = useInputState("");
    const [authError, setAuthError] = useState(false);

    const handleRegister = e => {
        e.preventDefault();

        const userDetails = {
            username: username,
            password: password,
            name: name,
            surname: surname
        };

        register(userDetails)
            .then(changeToken)
            //TODO: do it better?
            .then(() => setAuthError(false))
            .then(() => history.push("/main-page"))
            //TODO: add alert that user already exists
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
                Register
            </Typography>
            <Box component="form" onSubmit={handleRegister} noValidate sx={{mt: 1}}>
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
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    sx={{mt: 3}}
                    error={authError}
                    value={name}
                    onChange={updateName}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="surname"
                    label="Surname"
                    name="surname"
                    error={authError}
                    value={surname}
                    onChange={updateSurname}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 5, mb: 2}}
                >
                    Register
                </Button>
                <Link to={'/login'} style={{textDecoration: 'none'}}>
                    <Button
                        fullWidth
                        variant="outlined"
                        sx={{mt: 1, mb: 2}}
                    >
                        Login
                    </Button>
                </Link>
            </Box>
        </Box>
    );
};

export default RegisterPage;