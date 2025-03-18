import axios from "lib/axios";

class AuthService {
    async login(dataToLogin: loginData) {
        const { data } = await axios.post("/login", dataToLogin);
        return data;
    }
}