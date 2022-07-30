import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDhlNmI3ZDdkNGIxNzU5YTc3ZDQ0OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTAxOTg5NiwiZXhwIjoxNjU5Mjc5MDk2fQ.93A8_0TB2E4p8kijPnIOfvSriaXSW8rCIss8oH_XfQM";

export const publicRequest = axios.create({
    baseURL : BASE_URL,
});

export const userRequest = axios.create({
    baseURL : BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
});