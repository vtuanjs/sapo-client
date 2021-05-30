import { PartialDeep } from './type';
import { makeRequestConfig, sendRequest } from './common';

export function updateSapoOrder(param: {
  accessToken?: string;
  apiKey?: string;
  secretKey?: string;
  id: string;
  order: PartialDeep<ISapoOrder>;
  delay?: number;
}): Promise<ISapoOrder> {
  const { accessToken, apiKey, secretKey, id, order, delay } = param;
  const config = makeRequestConfig({
    path: `/orders/${id}.json`,
    method: 'PUT',
    accessToken,
    data: { order },
    rootField: 'order',
    delay,
    apiKey,
    secretKey
  });

  return sendRequest(config);
}

export interface ISapoOrder {
  id: number;
  buyer_accepts_marketing: boolean;
  cancel_reason: any;
  cancelled_on: null;
  cart_token: string;
  checkout_token: string;
  closed_on: string;
  created_on: string;
  currency: string;
  email: string;
  fulfillment_status: string;
  financial_status: string;
  status: string;
  name: string;
  note: string;
  number: number;
  order_number: number;
  processed_on: string;
  processing_method: string;
  source_url: any;
  source_name: string;
  landing_site: string;
  landing_site_ref: any;
  referring_site: string;
  reference: any;
  source_identifier: any;
  gateway: string;
  sub_total_price: number;
  token: string;
  total_discounts: number;
  total_line_items_price: number;
  total_price: number;
  total_weight: number;
  modified_on: any;
  tags: string;
  test: boolean;
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
    latitude: string;
    longitude: string;
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
    latitude: string;
    longitude: string;
  };
  customer: {
    id: number;
    email: string;
    phone: string;
    first_name: string;
    last_name: string;
    accepts_marketing: boolean;
    note: string;
    created_on: string;
    modified_on: string;
    last_order_id: number;
    last_order_name: string;
    orders_count: number;
    total_spent: number;
    state: string;
    verified_email: boolean;
    tags: string;
    default_address: {
      id: number;
      address1: string;
      address2: string;
      city: string;
      company: string;
      country: string;
      first_name: string;
      last_name: string;
      phone: string;
      district: string;
      district_code: string;
      ward: string;
      ward_code: string;
      province: string;
      province_code: string;
      zip: string;
      country_code: string;
      country_name: string;
      name: string;
      default: boolean;
    };
  };
  line_items: {
    id: number;
    fulfillable_quantity: number;
    fulfillment_status: string;
    grams: number;
    price: number;
    product_id: number;
    quantity: number;
    requires_shipping: boolean;
    sku: string;
    title: string;
    variant_id: number;
    variant_title: string;
    vendor: string;
    name: string;
    gift_card: boolean;
    total_discount: number;
    product_exists: boolean;
    variant_inventory_management: string;
    discount_code: string;
    properties: string;
  }[];
  shipping_lines: {
    title: string;
    price: number;
    code: string;
    source: string;
  }[];
  fulfillments: [];
  refunds: [];
  note_attributes: [];
  discount_codes: [];
  client_details: {
    browser_ip: string;
    accept_language: string;
    user_agent: string;
    session_hash: string;
    browser_width: number;
    browser_height: number;
  };
}

export interface ISapoOrderRefund {
  id: number;
  order_id: number;
  created_on: string;
  restock: boolean;
  user_id: number;
  note: string;
  transactions: {
    id: number;
    order_id: number;
    user_id: number;
    device_id: any;
    amount: number;
    authorization: null;
    gateway: string;
    kind: string;
    error_code: string;
    status: string;
    currency: string;
    created_on: string;
    test: boolean;
    source_name: string;
    parent_id: number;
    receipt: string;
    payment_details: string;
  }[];
  refund_line_items: {
    id: number;
    line_item_id: number;
    quantity: number;
    line_item: {
      id: number;
      fulfillable_quantity: number;
      fulfillment_status: string;
      grams: number;
      price: number;
      product_id: number;
      quantity: number;
      requires_shipping: boolean;
      sku: string;
      title: string;
      variant_id: number;
      variant_title: string;
      vendor: string;
      name: string;
      gift_card: boolean;
      total_discount: number;
      product_exists: boolean;
      variant_inventory_management: string;
      discount_code: string;
      properties: [];
    };
  }[];
  order_adjustments: [];
}
