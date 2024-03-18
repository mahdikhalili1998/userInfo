import axios from "axios";
import api from "../configs/config";

const getUser = () => api.get("sample-data/users");



const getOneUser = (id) => api.get(`sample-data/users/${id}`);



export { getUser, getOneUser };

// api.get(`sample-data/users/${id}`)
