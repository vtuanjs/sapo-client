import { makeRequestConfig, sendRequest } from './common';

export function getSapoShipments(param: {
  accessToken?: string;
  apiKey?: string;
  secretKey?: string;
  delay: number;
  query: string;
}): Promise<ISapoShipment[]> {
  const { accessToken, apiKey, secretKey, delay, query } = param;
  const config = makeRequestConfig({
    path: '/shipments.json',
    method: 'get',
    accessToken,
    rootField: 'shipments',
    delay,
    apiKey,
    secretKey,
    query
  });

  return sendRequest(config);
}

export interface ISapoShipment {
  id: number;
  order_id: number;
  name: string;
  order_name: string;
  fulfillment_id: number;
  email: string;
  note: string;
  tags: string;
  pick_hub: string;
  delivery_status: 'delivering' | 'delivered' | 'returning' | 'returned' | 'cancelled';
  payment_status: string;
  status: string;
  created_on: string;
  modified_on: string;
  cancelled_on: string;
  closed_on: string;
  service_fee: any;
  cod_amount: any;
  expected_delivery_on: any;
  billing_address: {
    address1: string;
    address2: string;
    city: string;
    first_name: string;
    last_name: string;
    phone: string;
    province: string;
    province_code: string;
    zip: string;
    country_code: string;
    country_name: string;
    company: string;
    country: string;
    name: string;
    district: string;
    district_code: string;
    ward: string;
    ward_code: string;
  };
  shipping_address: {
    address1: string;
    address2: string;
    city: string;
    first_name: string;
    last_name: string;
    phone: string;
    province: string;
    province_code: string;
    zip: string;
    country_code: string;
    country_name: string;
    company: string;
    country: string;
    name: string;
    district: string;
    district_code: string;
    ward: string;
    ward_code: string;
  };
  tracking_info: {
    tracking_number: string;
    tracking_reference: string;
    tracking_url: string;
    carrier: string;
  };
  line_items: {
    id: number;
    grams: number;
    price: number;
    product_id: number;
    variant_id: number;
    quantity: number;
    requires_shipping: boolean;
    title: string;
    variant_title: string;
    sku: string;
    vendor: string;
    name: string;
    gift_card: boolean;
    total_discount: number;
    variant_inventory_management: any;
    product_exists: any;
    discount_code: any;
  }[];
}
