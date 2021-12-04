import axios from "axios";
import BASE_URL from "../constants/base_url";

export const fetchAllBoards = () => {
    return axios.get(`${BASE_URL}/boards`)
        .then(response => response.data);
}

export const postBoard = (board, token) => {
    return axios.post(`${BASE_URL}/boards`, board, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => response.data)
}

export const fetchBoardMembers = boardId => {
    return axios.get(`${BASE_URL}/boards/${boardId}/users`)
        .then(response => response.data);
}

export const postAdminRights = (boardId, userId, token) => {
    return axios.post(`${BASE_URL}/boards/${boardId}/users/${userId}/admin`, {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => response.status);
}

export const fetchBoardDetails = boardId => {
    return axios.get(`${BASE_URL}/boards/${boardId}`)
        .then(response => response.data);
}

export const deleteBoard = boardId => {
    return axios.delete(`${BASE_URL}/boards/${boardId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => response.status);
}