import React, {useContext, useState} from 'react';
import {Alert, Box, Button, Snackbar, TextField, Typography} from "@mui/material";
import {useHistory} from "react-router-dom";
import {AuthContext} from "../contexts/AuthContext";
import useInputState from "../hooks/useInputState";
import {login} from "../services/auth-service";
import {BAD_REQUEST, UNAUTHORIZED} from "../constants/http_statuses";
import "../styles/AuthenticationPage.css"
import LinkButton from "../components/LinkButton";

const LoginPage = () => {
    const history = useHistory();
    const {changeToken} = useContext(AuthContext);
    const [username, updateUsername, , usernameError, setUsernameError] = useInputState("");
    const [password, updatePassword, , passwordError, setPasswordError] = useInputState("");
    const [authError, setAuthError] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        type: "info",
        message: ""
    });

    const handleLogin = e => {
        e.preventDefault();
        setUsernameError(false);
        setPasswordError(false);
        setAuthError(false);

        const credentials = {
            username: username,
            password: password
        };
        login(credentials)
            .then(changeToken)
            .then(() => setAuthError(false))
            .then(() => history.push("/main-page"))
            .catch(handleAuthError);
    }

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbar({...snackbar, open: false});
    }

    const handleAuthError = error => {
        if (error.response.status === BAD_REQUEST) {
            if (error.response.data.validationErrors.username) {
                setUsernameError(true);
            }
            if (error.response.data.validationErrors.password) {
                setPasswordError(true);
            }
        } else if (error.response.status === UNAUTHORIZED) {
            setAuthError(true)
            setSnackbar({
                open: true,
                type: "error",
                message: "Bad username or password"
            })
        }
    }

    return (
        <div className="authentication-page">
            <Box className="authentication-box">
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
                        error={usernameError || authError}
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
                        error={passwordError || authError}
                        helperText={passwordError ? "Password must be at least 8 characters" : ""}
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
                    <div className="button-row">
                        <LinkButton to='/register' text="Register"/>
                        <LinkButton to='/main-page' text="Continue as guest"/>
                    </div>
                </Box>
                <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={handleSnackbarClose}>
                    <Alert onClose={handleSnackbarClose} severity={snackbar.type} sx={{width: '100%'}}>
                        {snackbar.message}
                    </Alert>
                </Snackbar>
            </Box>
        </div>
    );
};

export default LoginPage;