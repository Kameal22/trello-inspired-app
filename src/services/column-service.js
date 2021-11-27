import axios from "axios";
import BASE_URL from "../constants/base_url";

export const addTask = (columnId, task) => {
    return axios.post(`${BASE_URL}/columns/${columnId}/tasks`, task)
        .then(response => response.data);
}
