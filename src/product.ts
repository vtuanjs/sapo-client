import { PartialDeep } from './type';
import { makeRequestConfig, sendRequest } from './common';

export function getSapoProducts(param: {
  accessToken?: string;
  apiKey?: string;
  secretKey?: string;
  query?: string;
  delay?: number;
}): Promise<ISapoProduct[]> {
  const { accessToken, apiKey, secretKey, query, delay } = param;
  const config = makeRequestConfig({
    path: `/products.json`,
    method: 'GET',
    accessToken,
    rootField: 'products',
    delay,
    apiKey,
    secretKey,
    query
  });

  return sendRequest(config);
}

export function getSapoProduct(param: {
  accessToken?: string;
  apiKey?: string;
  secretKey?: string;
  id: string;
  delay?: number;
}): Promise<ISapoProduct> {
  const { accessToken, apiKey, secretKey, id, delay } = param;
  const config = makeRequestConfig({
    path: `/products/${id}.json`,
    method: 'GET',
    accessToken,
    rootField: 'product',
    delay,
    apiKey,
    secretKey
  });

  return sendRequest(config);
}

export function postSapoProduct(param: {
  accessToken?: string;
  apiKey?: string;
  secretKey?: string;
  product: PartialDeep<ISapoProduct>;
  delay?: number;
}): Promise<ISapoProduct> {
  const { accessToken, apiKey, secretKey, product, delay } = param;
  const config = makeRequestConfig({
    path: '/products.json',
    method: 'POST',
    accessToken,
    data: { product },
    rootField: 'product',
    delay,
    apiKey,
    secretKey
  });

  return sendRequest(config);
}

export function updateSapoProduct(param: {
  accessToken?: string;
  apiKey?: string;
  secretKey?: string;
  id: string;
  product: PartialDeep<ISapoProduct>;
  delay?: number;
}): Promise<ISapoProduct> {
  const { accessToken, apiKey, secretKey, id, product, delay } = param;
  const config = makeRequestConfig({
    path: `/products/${id}.json`,
    method: 'PUT',
    accessToken,
    data: { product },
    rootField: 'product',
    delay,
    apiKey,
    secretKey
  });

  return sendRequest(config);
}

export interface ISapoProduct {
  id: number;
  name: string;
  alias: string;
  vendor: string;
  product_type: string;
  meta_title: string;
  meta_description: string;
  summary: string;
  published_on: string;
  template_layout: string;
  created_on: string;
  modified_on: string;
  content: string;
  tags: string;
  images: ISapoProductImage[];
  image: ISapoProductImage;
  variants: ISapoProductVariant[];
  options: {
    id: number;
    name: string;
    position: number;
    created_on: string;
    modified_on: string;
    values: string[];
  }[];
}

export interface ISapoProductImage {
  id: number;
  product_id: number;
  position: number;
  variant_ids: string[];
  created_on: string;
  modified_on: string;
  src: string;
  alt: string;
  filename: string;
  size: number;
  width: number;
  height: number;
  base64?: string;
}

export interface ISapoProductVariant {
  id: number;
  barcode: string;
  sku: string | null;
  price: number;
  compare_at_price: number;
  option1: string;
  option2: string;
  option3: string;
  taxable: boolean;
  inventory_management: string;
  inventory_policy: string;
  inventory_quantity: number;
  requires_shipping: boolean;
  weight: number;
  weight_unit: 'kg';
  image_id: number;
  position: number;
  created_on: string;
  modified_on: string;
  title: string;
  grams: number;
  product_id: number;
}
