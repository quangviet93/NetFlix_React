import axios from 'axios'

export const envApiUrl = `${process.env.REACT_APP_API_URL}/api/` || `${document.location.origin}/api/`
const defaultApiUrl = `${window.location.protocol}//${window.location.hostname}`
const apiUrl = envApiUrl || defaultApiUrl

const axiosClient = axios.create({
  baseURL: `${apiUrl}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})

axiosClient.interceptors.request.use(async (config: any) => {
  const customHeaders = {
    Authorization: '',
  }

  const token = localStorage.getItem('access_token')
  if (token) {
    customHeaders.Authorization = `Bearer ${token}`
  }

  return {
    ...config,
    headers: {
      ...customHeaders, // auto attach token
      ...config.headers, // but you can override for some requests
    },
  }
})

export default axiosClient

