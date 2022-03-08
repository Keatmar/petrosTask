import { set, isEmpty, includes } from 'lodash';
import { createToken, getToken } from './cookies';

export const server = 'https://api.spendtrack.dev'; // PROD ENV

const black_list = ['/auth/login', '/auth/register'];
let isLogin = false;

const SpendtrackService = async (props) => {
  try {
    const { api, method, params } = props;
    const headers = {};
    const path = `${server}${api}`;
    //const jwt = getToken();

    set(headers, 'Accept', 'application/json');
    set(headers, 'Content-Type', 'application/json');
    //  set(headers, 'Access-Control-Expose-Headers', 'authorization');
    if (!api.includes('auth') && jwt) {
      set(headers, 'Authorization', `Bearer ${jwt}`);
    }

    const options = {
      method,
      headers,
      body: JSON.stringify(params)
    };

    const response = await fetch(path, options);
    if (!response.ok) {
      const message = `An error in SpendtrackService: ${response.status}`;
      throw new Error(message);
    } else {
      const res = await response.json();
      console.log(res);
      return res;
    }
  } catch (error) {
    console.log(error);
  }
};

export { SpendtrackService };
