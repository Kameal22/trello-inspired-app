import {createContext, useState} from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [token, setToken] = useState(localStorage.getItem("jwt"));

    const handleChangingToken = (newToken) => {
        localStorage.setItem("jwt", newToken);
        setToken(newToken);
    }

    return (
        <AuthContext.Provider value={{token, handleChangingToken}}>
            {props.children}
        </AuthContext.Provider>
    )

}