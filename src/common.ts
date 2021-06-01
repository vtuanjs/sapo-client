import axios, { Method } from 'axios';
import axiosRetry from 'axios-retry';

import {
  SapoError,
  SapoNotFoundError,
  SapoUnauthorizedError,
  SapoInvalidArgError,
  SapoPermissionDeniedError
} from './errors';

axiosRetry(axios, { retries: 3 });
const DELAY = 500;

export function makeRequestConfig(param: {
  url?: string;
  path?: string;
  method: Method;
  accessToken: string;
  data?: any;
  rootField?: string;
  delay?: number;
  query?: string;
  apiKey?: string;
  secretKey?: string;
}): {
  url: string;
  method: Method;
  headers: any;
  data: any;
  rootField: string;
  delay: number;
} {
  let { url } = param;
  const { path, method, accessToken, data, rootField, delay, query, apiKey, secretKey } = param;

  const headers: any = {
    'Content-Type': 'application/json'
  };

  if (!url) {
    url = 'https://';

    if (typeof apiKey === 'string' && typeof secretKey === 'string') {
      url += `${apiKey}:${secretKey}@`;
    } else {
      headers['X-Sapo-Access-Token'] = accessToken;
    }

    url += `apis.mysapo.net/admin${path}`;
  } else {
    if (accessToken) {
      headers['X-Sapo-Access-Token'] = accessToken;
    }
  }

  if (!url.startsWith('http')) url = 'https://' + url;

  if (typeof query === 'string') {
    url += `?${query}`;
  }

  return {
    url,
    method,
    headers,
    data,
    rootField,
    delay
  };
}

export async function sendRequest({
  url,
  method,
  headers,
  data,
  rootField,
  delay = DELAY
}: {
  url?: string;
  method: Method;
  headers: any;
  data?: any;
  rootField?: string;
  delay?: number;
}): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      axios({ url, method, headers, data })
        .then((response) => {
          resolve(handleResponse(response, rootField));
        })
        .catch((error) => {
          handleError(error);
        })
        .catch((error) => {
          reject(error);
        });
    }, delay);
  });
}

function handleResponse(response: any, rootField?: string) {
  if (typeof rootField === 'string') {
    return response.data[rootField];
  }
  return response.data;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function handleError(error: any): void {
  if (error.response) {
    const status = error.response.status;
    const message = error.response.data?.error
      ? error.response.data.error
      : error.response.statusText;

    switch (status) {
      case 401:
        throw new SapoUnauthorizedError(message);
      case 403:
        throw new SapoPermissionDeniedError(message);
      case 404:
        throw new SapoNotFoundError(message);
      case 422: {
        throw new SapoInvalidArgError(message);
      }
      default:
        throw new SapoError(message);
    }
  }

  throw new SapoError();
}
