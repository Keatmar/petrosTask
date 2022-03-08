import axios from 'axios';
import jwt_decode from 'jwt-decode';

const baseUrl = 'https://api.spendtrack.dev';

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 3000,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
});

axiosInstance.interceptors.request.use(async (req) => {
  if (!req.url.includes('/auth/login') && !req.url.includes('/auth/register')) {
    const authTokens = localStorage.getItem('accessToken');
    req.headers.Authorization = `Bearer ${authTokens}`;

    // const user = jwt_decode(authTokens.access);
    // const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    // if (!isExpired) return req;

    // const response = await axios.post(`${baseUrl}/api/token/refresh`, {
    //   refresh: authTokens.refresh
    // });

    // localStorage.setItem('authTokens', JSON.stringify(response.data));
    // req.headers.Authorization = `Bearer ${authTokens?.access}`;
  } else {
  }
  return req;
});

export default axiosInstance;
