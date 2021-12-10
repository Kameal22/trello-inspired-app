import axios from "axios";
import BASE_URL from "../constants/base_url";

export const fetchAllTeams = () => {
    return axios.get(`${BASE_URL}/teams`)
        .then(response => response.data);
}

export const postTeam = (teamDto, token) => {
    return axios.post(`${BASE_URL}/teams`, teamDto, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => response.data);
}

export const joinTeam = (teamId, userId, token) => {
    return axios.post(`${BASE_URL}/teams/${teamId}/members/${userId}`, {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const fetchAllBoardsForTeam = (teamId, token) => {
    return axios.get(`${BASE_URL}/teams/${teamId}/boards`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => response.data);
}

export const postTeamBoard = (board, teamId, token) => {
    return axios.post(`${BASE_URL}/teams/${teamId}/boards`, board, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => response.data);
}

export const deleteTeam = (teamId, token) => {
    return axios.delete(`${BASE_URL}/teams/${teamId}` , {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}