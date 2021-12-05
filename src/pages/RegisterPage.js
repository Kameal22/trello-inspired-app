import React, {useContext, useState} from 'react';
import {Alert, Box, Button, Snackbar, TextField, Typography} from "@mui/material";
import {Link, useHistory} from "react-router-dom";
import {AuthContext} from "../contexts/AuthContext";
import useInputState from "../hooks/useInputState";
import {register} from "../services/auth-service";
import {BAD_REQUEST, CONFLICT} from "../constants/http_statuses";

const RegisterPage = () => {
    const history = useHistory();
    const {token, changeToken} = useContext(AuthContext);
    const [username, updateUsername, resetUsername, usernameError, setUsernameError] = useInputState("");
    const [password, updatePassword, resetPassword, passwordError, setPasswordError] = useInputState("");
    const [name, updateName, resetName, nameError, setNameError] = useInputState("");
    const [surname, updateSurname, resetSurname, surnameError, setSurnameError] = useInputState("");
    const [authError, setAuthError] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        type: "info",
        message: ""
    });

    const handleRegister = e => {
        e.preventDefault();
        setUsernameError(false);
        setPasswordError(false);
        setNameError(false);
        setSurnameError(false);

        const userDetails = {
            username: username,
            password: password,
            name: name,
            surname: surname
        };

        register(userDetails)
            .then(changeToken)
            .then(() => setAuthError(false))
            .then(() => history.push("/main-page"))
            //TODO: add alert that user already exists
            .catch(handleAuthError);
    }

    const handleAuthError = error => {
        if (error.response.status === BAD_REQUEST) {
            if (error.response.data.validationErrors.username) {
                setUsernameError(true);
            }
            if (error.response.data.validationErrors.password) {
                setPasswordError(true);
            }
            if (error.response.data.validationErrors.name) {
                setNameError(true);
            }
            if (error.response.data.validationErrors.surname) {
                setSurnameError(true);
            }
        } else if (error.response.status === CONFLICT) {
            setSnackbar({
                open: true,
                type: "error",
                message: "Username is already taken"
            });
        }
    }

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbar({...snackbar, open: false});
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
                    error={usernameError}
                    helperText={usernameError ? "Username can't be blank" : ""}
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
                    error={passwordError}
                    helperText={passwordError ? "Password must be at least 8 characters" : ""}
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
                    error={nameError}
                    helperText={nameError ? "Name can't be blank" : ""}
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
                    error={surnameError}
                    helperText={surnameError ? "Surname can't be blank" : ""}
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
            <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity={snackbar.type} sx={{width: '100%'}}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default RegisterPage;