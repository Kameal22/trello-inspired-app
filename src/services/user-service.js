import axios from "axios";
import BASE_URL from "../constants/base_url";

export const fetchAllBoardsForUser = (userId, token) => {
    return axios.get(`${BASE_URL}/users/${userId}/boards`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => response.data);
}

export const fetchAllBoardsAndMembersForUser = (userId, token) => {
    return axios.get(`${BASE_URL}/users/${userId}/boards/admin`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => response.data);
}