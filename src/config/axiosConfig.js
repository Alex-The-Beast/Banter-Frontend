import axios from "axios";

export default axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});