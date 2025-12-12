//axios instance

import axios from "axios";
import { useAuthStore } from "@/stores/auth.store";

const api = axios.create({
   baseURL: "http://localhost:4000/api",
});

//interceptor
api.interceptors.request.use((config) =>{
    const auth = useAuthStore();

    if(auth.token){
      config.headers.Authorization = `Bearer ${auth.token}`;
    }   
   
    return config;
});

export default api;