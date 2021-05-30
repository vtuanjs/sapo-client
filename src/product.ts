import { PartialDeep } from './type';
import { makeRequestConfig, sendRequest } from './common';

export type SapoProductProp = {
  name: string;
  alias: string;
  vendor: string;
  product_type: string;
  tags: string;
  summary: string;
  meta_title: string;
  meta_description: string;
  content: string;
  featured_image: string;
  images: {
    src?: string;
    base64?: string;
  }[];
  options: ISapoProductOption[];
  variants: IVariant[];
  available: boolean;
  url: string;
  published: boolean;
  published_on: string;
};

export function postSapoProduct(param: {
  accessToken?: string;
  apiKey?: string;
  secretKey?: string;
  product: PartialDeep<SapoProductProp>;
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
  product: PartialDeep<SapoProductProp>;
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

export interface IVariant {
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

export interface ISapoProductOption {
  name: string;
  position: number;
}

export interface ISapoProductImage {
  id: number;
  product_id: number;
  src: string;
  variant_ids: [string];
}

export interface ISapoProduct {
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
  options: ISapoProductOption[];
  variants: IVariant[];
  available: boolean;
  url: string;
}
