export interface ISapoFulfillment {
  id: number;
  order_id: number;
  status: string;
  tracking_company: string;
  tracking_number: any;
  tracking_url: any;
  created_on: string;
  modified_on: string;
  service: any;
  receipt: any;
  tracking_numbers: any;
  tracking_urls: any;
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
    variant_inventory_management: any;
    discount_code: any;
    properties: [];
  }[];
}
