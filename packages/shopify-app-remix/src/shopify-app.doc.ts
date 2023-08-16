import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'shopifyApp',
  descriptionType: 'ShopifyAppGeneratedType',
  description: '',
  category: 'entrypoint',
  type: 'function',
  isVisualComponent: false,
  defaultExample: {
    codeblock: {
      tabs: [
        {
          code: './shopify-app.doc.example.ts',
          language: 'ts',
        },
      ],
      title: 'shopifyApp',
    },
  },
  definitions: [
    {
      title: 'shopifyApp',
      description: 'Function to create a new Shopify API object.',
      type: 'ShopifyAppGeneratedType',
    },
  ],
  related: [
    {
      name: 'authenticate',
      subtitle: 'Authenticate requests from Shopify.',
      url: '/docs/api/shopify-app-remix/reference/authenticate',
    },
    {
      name: 'registerWebhooks',
      subtitle: 'Listen to events from Shopify.',
      url: '/docs/api/shopify-app-remix/reference/registerWebhooks',
    },
    {
      name: 'addDocumentResponseHeaders',
      subtitle: 'Set headers for embedded apps.',
      url: '/docs/api/shopify-app-remix/reference/addDocumentResponseHeaders',
    },
    {
      name: 'login',
      subtitle: 'Display a login form.',
      url: '/docs/api/shopify-app-remix/reference/login',
    },
    {
      name: 'sessionStorage',
      subtitle: 'Access token persistence.',
      url: '/docs/api/shopify-app-remix/reference/sessionStorage',
    },
  ],
};

export default data;
