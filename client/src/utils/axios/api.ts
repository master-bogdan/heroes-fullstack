import axios from 'axios';
import { API_URL } from 'utils/constants/urls';

export const axiosBaseQuery = axios.create({
  baseURL: API_URL,
});
