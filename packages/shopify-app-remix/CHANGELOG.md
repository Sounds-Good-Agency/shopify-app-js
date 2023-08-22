# @shopify/shopify-app-remix

## 1.0.5

### Patch Changes

- 346b623: Updating dependency on @shopify/shopify-api
- 14e8019: Enable `authenticate.public` to handle post-purchase extension requests by supporting extra CORS headers and fixing session token verification.
- Updated dependencies [346b623]
  - @shopify/shopify-app-session-storage@1.1.8

## 1.0.4

### Patch Changes

- 13b9048: Updating @shopify/shopify-api dependency to the latest version
- ebce92f: Re-export ApiVersion object from shopify-api
- Updated dependencies [13b9048]
  - @shopify/shopify-app-session-storage@1.1.7

## 1.0.3

### Patch Changes

- e9cefea: Fixing issue when authenticating requests without a `shop` search param to non-embedded apps.

## 1.0.2

### Patch Changes

- 2d087a4: authenticate.webhook now returns context when there is no session for the corresponding shop instead of throwing a 404 Response

## 1.0.1

### Patch Changes

- 92205c2: Fixing small issue in the README

## 1.0.0

Initial release of the @shopify/shopify-app-remix package 🎉
