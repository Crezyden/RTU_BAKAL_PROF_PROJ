import axios from "axios";
import { getConttentType } from './../utils/api.utils';

export const API_URL = `${process.env.APP_URL}/api`
// export const API_URL = `http://localhost:3500/`
export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: getConttentType()
})