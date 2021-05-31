import { makeRequestConfig, sendRequest } from '../common';

export interface ISapoPublicVariant {
  id?: number;
  title: string;
  barcode: string;
  sku: string;
  price: number;
  compare_at_price: number;
  options: string[];
  option1: string;
  option2: string;
  option3: string;
  inventory_management: string;
  inventory_policy: string;
  inventory_quantity: number;
  weight: number;
  weight_unit: string;
  featured_image: {
    id?: number;
    product_id: number;
    position: string;
    src: string;
    variant_ids: number[];
  };
  available: boolean;
}

export interface ISapoPublicProductOption {
  name: string;
  position: number;
}

export interface ISapoPublicProductImage {
  id: number;
  product_id: number;
  src: string;
  variant_ids: [string];
}

export interface ISapoPublicProduct {
  id: number;
  name: string;
  alias: string;
  vendor: string;
  product_type: string;
  price: number;
  price_max: number;
  price_min: number;
  price_varies: boolean;
  compare_at_price_max: number;
  compare_at_price_min: number;
  compare_at_price_varies: boolean;
  tags: string[];
  summary: string;
  meta_title: string;
  meta_description: string;
  content: string;
  featured_image: string;
  images: string[];
  options: ISapoPublicProductOption[];
  variants: ISapoPublicVariant[];
  available: boolean;
  url: string;
}

export function getProductsByCollectionHandle({
  domain,
  page,
  collectionHandle
}: {
  domain: string;
  page: number;
  collectionHandle: string;
}): Promise<ISapoPublicProduct[]> {
  const config = makeRequestConfig({
    url: `${domain}/collections/${collectionHandle}/products.json?page=${page}`,
    accessToken: '',
    method: 'GET',
    rootField: 'products',
    delay: 0
  });

  return sendRequest(config);
}

export function getProductByFrontStoreAPI({
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
)): Promise<ISapoPublicProduct> {
  const config = makeRequestConfig({
    url: url || `${domain}/products/${handle}.json`,
    accessToken: '',
    method: 'GET',
    rootField: 'product',
    delay: 0
  });

  return sendRequest(config);
}

export function getProductsByFrontStoreAPI({
  domain,
  page
}: {
  domain: string;
  page: number;
}): Promise<ISapoPublicProduct[]> {
  const config = makeRequestConfig({
    url: `${domain}/collections/all/products.json?page=${page}`,
    accessToken: '',
    method: 'GET',
    rootField: 'products',
    delay: 0
  });

  return sendRequest(config);
}
