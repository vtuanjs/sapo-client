import { PartialDeep } from './type';
import { makeRequestConfig, sendRequest } from './common';

export function getSapoBlogs(param: {
  accessToken?: string;
  apiKey?: string;
  secretKey?: string;
  delay: number;
  query: string;
}): Promise<ISapoBlog[]> {
  const { accessToken, apiKey, secretKey, delay, query } = param;
  const config = makeRequestConfig({
    path: '/blogs.json',
    method: 'GET',
    accessToken,
    rootField: 'blogs',
    delay,
    apiKey,
    secretKey,
    query
  });

  return sendRequest(config);
}

export function postSapoBlog(param: {
  accessToken?: string;
  apiKey?: string;
  secretKey?: string;
  blog: PartialDeep<ISapoBlog>;
  delay: number;
}): Promise<ISapoBlog> {
  const { accessToken, apiKey, secretKey, blog, delay } = param;
  const config = makeRequestConfig({
    path: '/blogs.json',
    method: 'POST',
    accessToken,
    data: { blog },
    rootField: 'blog',
    delay,
    apiKey,
    secretKey
  });

  return sendRequest(config);
}

export function updateSapoBlog(param: {
  accessToken?: string;
  apiKey?: string;
  secretKey?: string;
  id: string;
  blog: PartialDeep<ISapoBlog>;
  delay: number;
}): Promise<ISapoBlog> {
  const { accessToken, apiKey, secretKey, id, blog, delay } = param;
  const config = makeRequestConfig({
    path: `/blogs/${id}.json`,
    method: 'PUT',
    accessToken,
    data: { blog },
    rootField: 'blog',
    delay,
    apiKey,
    secretKey
  });

  return sendRequest(config);
}

export interface ISapoBlog {
  id: number;
  name: string;
  description: string;
  alias: string;
  commentable: string;
  meta_title: string;
  meta_description: string;
  created_on: string;
  modified_on: string;
  template_layout: string;
}
