import axios from 'axios'

import { backendBaseUrl } from '../config'

export const api = axios.create({
  baseURL: backendBaseUrl,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
