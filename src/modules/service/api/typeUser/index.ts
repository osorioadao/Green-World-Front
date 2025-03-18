import axios from "../../../../lib/axios";

class TypeUserService{
    async getAll(){
        const { data } = await axios.get("/tipo-user");
        return data;
    }
    async getTypeIdByDeafault(){
        const { data } = await axios.get("/type");
        return data;
    }
}
export const typeUserService = new TypeUserService();