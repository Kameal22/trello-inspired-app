import axios from "axios";
import BASE_URL from "../constants/base_url";

export const login = credentials => {
    return axios.post(`${BASE_URL}/auth/login`, credentials)
        .then(response => response.data.accessToken)
}

export const register = userDetails => {
    return axios.post(`${BASE_URL}/auth/register`, userDetails)
        .then(response => response.data.accessToken)
}