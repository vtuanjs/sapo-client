import { ISapoCustomCollection } from '../custom-collection';
import { makeRequestConfig, sendRequest } from '../common';

export function getSapoPublicCollection({
  url,
  domain,
  handle
}: {
  url?: string;
  domain?: string;
  handle?: string;
} & (
  | {
      url: string;
    }
  | {
      domain?: string;
      handle?: string;
    }
)): Promise<ISapoCustomCollection> {
  const config = makeRequestConfig({
    url: url || `${domain}/collections/${handle}.json`,
    accessToken: '',
    method: 'GET',
    rootField: 'collection',
    delay: 0
  });

  return sendRequest(config);
}

export function getSapoPublicCollections({
  domain,
  page
}: {
  domain: string;
  page: number;
}): Promise<ISapoCustomCollection[]> {
  const config = makeRequestConfig({
    url: `${domain}/collections.json?page=${page}`,
    accessToken: '',
    method: 'GET',
    rootField: 'collections',
    delay: 0
  });

  return sendRequest(config);
}
