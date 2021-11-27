import axios from "axios";
import BASE_URL from "../constants/base_url";

export const deleteTask = taskId => {
    return axios.delete(`${BASE_URL}/tasks/${taskId}`);
}

export const editTask = (taskId, task) => {
    return axios.put(`${BASE_URL}/tasks/${taskId}`, task);
}