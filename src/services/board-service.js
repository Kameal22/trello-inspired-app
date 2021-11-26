import axios from "axios";
import BASE_URL from "../constants/base_url";

export const fetchAllBoards = () => {
    return axios.get(`${BASE_URL}/boards`)
        .then(response => response.data);
}

export const postBoard = (board) => {
    return axios.post(`${BASE_URL}/boards`, board)
        .then(response => response.data)
}

export const fetchBoardMembers = (boardId) => {
    return axios.get(`${BASE_URL}/boards/${boardId}/users`)
        .then(response => response.data);
}

export const postAdminRights = (boardId, userId) => {
    return axios.post(`${BASE_URL}/boards/${boardId}/users/${userId}/admin`)
        .then(response => response.status);
}