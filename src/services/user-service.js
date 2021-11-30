import axios from "axios";
import BASE_URL from "../constants/base_url";

export const fetchAllBoardsForUser = (userId) => {
    return axios.get(`${BASE_URL}/users/${userId}/boards`)
        .then(response => response.data);
}

export const fetchAllBoardsAndMembersForUser = (userId) => {
    return axios.get(`${BASE_URL}/users/${userId}/boards/admin`)
        .then(response => response.data);
}