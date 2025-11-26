import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api",
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
