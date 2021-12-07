import axios from "axios";
import BASE_URL from "../constants/base_url";

export const fetchAllTeams = () => {
    return axios.get(`${BASE_URL}/teams`)
        .then(response => response.data);
}