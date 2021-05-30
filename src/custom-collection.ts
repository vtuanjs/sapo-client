import { makeRequestConfig, sendRequest } from './common';

export function putSapoCustomCollection(param: {
  accessToken?: string;
  apiKey?: string;
  secretKey?: string;
  customCollection: any;
  delay?: number;
  id: string;
}): Promise<ISapoCustomCollection> {
  const { accessToken, apiKey, secretKey, customCollection, delay, id } = param;
  const config = makeRequestConfig({
    path: `/custom_collections/${id}.json`,
    method: 'PUT',
    accessToken,
    data: { custom_collection: customCollection },
    rootField: 'custom_collection',
    delay,
    apiKey,
    secretKey
  });
  return sendRequest(config);
}

export function deleteSapoCustomCollection(param: {
  accessToken?: string;
  apiKey?: string;
  secretKey?: string;
  id: string;
  delay?: number;
}): Promise<any> {
  const { accessToken, apiKey, secretKey, id, delay } = param;
  const config = makeRequestConfig({
    path: `/custom_collections/${id}.json`,
    method: 'DELETE',
    accessToken,
    delay,
    apiKey,
    secretKey
  });
  return sendRequest(config);
}

export function postSapoCustomCollection(param: {
  accessToken?: string;
  apiKey?: string;
  secretKey?: string;
  customCollection: any;
  delay?: number;
}): Promise<ISapoCustomCollection> {
  const { accessToken, apiKey, secretKey, customCollection, delay } = param;
  const config = makeRequestConfig({
    path: '/custom_collections.json',
    method: 'POST',
    accessToken,
    apiKey,
    secretKey,
    data: { custom_collection: customCollection },
    rootField: 'custom_collection',
    delay
  });
  return sendRequest(config);
}

export function getSapoCustomCollections(param: {
  accessToken?: string;
  apiKey?: string;
  secretKey?: string;
  query?: string;
  delay?: number;
}): Promise<ISapoCustomCollection[]> {
  const { accessToken, apiKey, secretKey, query, delay } = param;
  const config = makeRequestConfig({
    path: '/custom_collections.json',
    method: 'GET',
    accessToken,
    apiKey,
    secretKey,
    rootField: 'custom_collections',
    delay,
    query
  });

  return sendRequest(config);
}

export function countSapoCustomCollections(param: {
  accessToken?: string;
  apiKey?: string;
  secretKey?: string;
  delay?: number;
}): Promise<number> {
  const { accessToken, apiKey, secretKey, delay } = param;
  const config = makeRequestConfig({
    path: '/custom_collections/count.json',
    method: 'GET',
    accessToken,
    apiKey,
    secretKey,
    rootField: 'count',
    delay
  });

  return sendRequest(config);
}

export interface ISapoCustomCollection {
  id: number;
  name: string;
  alias: string;
  description: string;
  published_on: string;
  meta_title: string;
  meta_description: string;
  created_on: string;
  modified_on: string;
  template_layout: string;
  sort_order: string;
  image: {
    id: number;
    src: string;
    alt: string | null;
    extension: string;
    name: string;
    content_type: string;
    created_on: string;
    modified_on: string;
    size: number;
    width: number;
    height: number;
  } | null;
  products_count: number;
}
