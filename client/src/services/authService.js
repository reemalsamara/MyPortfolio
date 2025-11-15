
import api from "./api";

// Sign in: call backend, store token + user locally, return user
export const signin = async (credentials) => {
    const res = await api.post("/auth/signin", credentials);
    const { token, user } = res.data;

    // Save JWT token and user info in localStorage
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    return user;
};

// Sign out: call backend, clear localStorage
export const signout = async () => {
    await api.get("/auth/signout");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
};
