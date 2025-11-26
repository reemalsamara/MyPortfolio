import axios from "axios";

// Use env variable so it works locally AND on Render
const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

// Automatically attach JWT if available
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

//  Define backend endpoint functions
export const sendContact = (data) => api.post("/contacts", data);
export const getContacts = () => api.get("/contacts");

export default api;
