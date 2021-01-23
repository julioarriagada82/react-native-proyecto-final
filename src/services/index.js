import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3';

export const API_KEY = '73097bdebe8f71e33eb75198e674a8d5';
export const INTERNAL_SERVER_ERROR = 'Error Interno del Servidor'
export const SERVICE_UNAVAILABLE_MESSAGE = 'Servicio no disponible'

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 120000,
  withCredentials: true,
})

