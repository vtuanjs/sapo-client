import { makeRequestConfig, sendRequest } from './common';

export function getSapoCollections(param: {
  accessToken?: string;
  apiKey?: string;
  secretKey?: string;
  query?: string;
  delay?: number;
}): Promise<ISapoCollection[]> {
  const { accessToken, apiKey, secretKey, query, delay } = param;
  const config = makeRequestConfig({
    path: '/collections.json',
    method: 'GET',
    accessToken,
    apiKey,
    secretKey,
    rootField: 'collections',
    delay,
    query
  });

  return sendRequest(config);
}

export interface ISapoCollection {
  id: number;
  name: string;
  description: string;
  alias: string;
  meta_title: string;
  meta_description: string;
  created_on: string;
  modified_on: string;
  template_layout: string;
  sort_order: string;
  published_on: string;
  image: {
    created_on: string;
    src: string;
  };
  disjunctive: boolean;
  type: string;
}
