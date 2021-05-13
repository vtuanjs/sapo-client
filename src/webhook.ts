import { makeRequestConfig, sendRequest } from './common';

export function postSapoWebhook(params: {
  accessToken: string;
  webhook: {
    topic: SapoWebhookTopic;
    address: string;
    format: 'json';
  };
  apiKey?: string;
  secretKey?: string;
  delay?: number;
}): Promise<any> {
  const config = makeRequestConfig({
    path: '/webhooks.json',
    method: 'POST',
    accessToken: params.accessToken,
    data: { webhook: params.webhook },
    rootField: 'webhook',
    delay: params.delay
  });
  return sendRequest(config);
}

export type SapoWebhookTopic =
  | 'orders/create'
  | 'orders/delete'
  | 'orders/updated'
  | 'orders/paid'
  | 'orders/cancelled'
  | 'orders/fulfilled'
  | 'orders/partially_fulfilled'
  | 'order_transactions/create'
  | 'carts/create'
  | 'carts/update'
  | 'checkouts/create'
  | 'checkouts/update'
  | 'checkouts/delete'
  | 'refunds/create'
  | 'products/create'
  | 'products/update'
  | 'products/delete'
  | 'collections/create'
  | 'collections/update'
  | 'collections/delete'
  | 'customers/create'
  | 'customers/enable'
  | 'customers/disable'
  | 'customers/update'
  | 'customers/delete'
  | 'fulfillments/create'
  | 'fulfillments/update'
  | 'store/update'
  | 'app/uninstalled';
