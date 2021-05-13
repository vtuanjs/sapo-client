import { PartialDeep } from './type';
import { makeRequestConfig, sendRequest } from './common';

export function getSapoArticles(param: {
  accessToken?: string;
  apiKey?: string;
  secretKey?: string;
  delay: number;
  blogId: string;
  query: string;
}): Promise<ISapoArticle[]> {
  const { accessToken, apiKey, secretKey, delay, blogId, query } = param;
  const config = makeRequestConfig({
    path: `/blogs/${blogId}/articles.json`,
    method: 'GET',
    accessToken,
    rootField: 'articles',
    delay,
    apiKey,
    secretKey,
    query
  });

  return sendRequest(config);
}

export function postSapoArticle(param: {
  accessToken?: string;
  apiKey?: string;
  secretKey?: string;
  article: PartialDeep<ISapoArticle>;
  delay: number;
  blogId: string;
}): Promise<ISapoArticle> {
  const { accessToken, apiKey, secretKey, article, delay, blogId } = param;
  const config = makeRequestConfig({
    path: `/blogs/${blogId}/articles.json`,
    method: 'POST',
    accessToken,
    data: { article },
    rootField: 'article',
    delay,
    apiKey,
    secretKey
  });

  return sendRequest(config);
}

export function updateSapoArticle(param: {
  accessToken?: string;
  apiKey?: string;
  secretKey?: string;
  id: string;
  article: PartialDeep<ISapoArticle>;
  delay: number;
  blogId: string;
}): Promise<ISapoArticle> {
  const { accessToken, apiKey, secretKey, id, article, delay, blogId } = param;
  const config = makeRequestConfig({
    path: `/blogs/${blogId}/articles/${id}.json`,
    method: 'PUT',
    accessToken,
    data: { article },
    rootField: 'article',
    delay,
    apiKey,
    secretKey
  });

  return sendRequest(config);
}

export interface ISapoArticle {
  id: number;
  blog_id: number;
  title: string;
  alias: string;
  user_id: number;
  meta_title: string;
  meta_description: string;
  created_on: string;
  modified_on: string;
  published_on: string;
  content: string;
  template_layout: string;
  summary: string;
  tags: string;
  author: string;
  image: {
    id: number;
    src: string;
    alt: string;
    extension: string;
    name: string;
    content_type: string;
    created_on: string;
    modified_on: string;
    size: number;
    width: number;
    height: number;
  };
  alt_image: string;
}
