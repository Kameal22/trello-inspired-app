import axios from "axios";
import BASE_URL from "../constants/base_url";

export const addTask = (columnId, task, token) => {
    return axios.post(`${BASE_URL}/columns/${columnId}/tasks`, task, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => response.data);
}

export const updateTasksInColumn = (taskIds, columnId, token) => {
    return axios.put(`${BASE_URL}/columns/${columnId}/tasks`, taskIds, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
