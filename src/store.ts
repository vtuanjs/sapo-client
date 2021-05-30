import { makeRequestConfig, sendRequest } from './common';

export function getSapoStore(param: {
  apiKey?: string;
  secretKey?: string;
  accessToken?: string;
  delay?: number;
}): Promise<any> {
  const { apiKey, secretKey, accessToken, delay } = param;
  const config = makeRequestConfig({
    path: '/store.json',
    method: 'GET',
    apiKey,
    secretKey,
    accessToken,
    rootField: 'store',
    delay
  });
  return sendRequest(config);
}
