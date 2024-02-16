import axios from "axios";

export const BASEURL="http://localhost:3000";

export const myAxios=axios.create({
    baseURL:BASEURL}
);