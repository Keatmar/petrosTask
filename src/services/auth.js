import axiosInstance from './axios';

export async function LoginService(params) {
  const server = axiosInstance;
  return await server
    .post('/auth/login', {
      email: params.email,
      password: params.password
    })
    .then(function (response) {
      localStorage.setItem('accessToken', response.headers.authorization);
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export async function RegisterService(params) {
  const server = axiosInstance;
  return await server
    .post('/auth/register', {
      email: params.email,
      userName: params.username,
      password: params.password
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export function SignOut() {
  localStorage.clear();
}

export async function EmailVerify(params) {
  const server = axiosInstance;
  return await server
    .post('/auth/email/verify', {
      verificationCode: params.code
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error.response.data.error.message);
    });
}

export async function ResendEmailVerificationCode(params) {
  const server = axiosInstance;
  return await server
    .post('/auth/email/verification/retry', {
      email: params.email
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}
