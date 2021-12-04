import axios from "axios";
import BASE_URL from "../constants/base_url";

export const deleteTask = (taskId, token) => {
    return axios.delete(`${BASE_URL}/tasks/${taskId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const editTask = (taskId, task, token) => {
    return axios.put(`${BASE_URL}/tasks/${taskId}`, task, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}