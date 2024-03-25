export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  ssl: {
    enabled: env.bool('SSL_ENABLED', false),
    key: env('SSL_KEY_PATH', 'E:/Lavoro/Strapi/MSYS2/home/giuli/key.pem'),
    cert: env('SSL_CERT_PATH','E:/Lavoro/Strapi/MSYS2/home/giuli/cert.pem'),
  },
});