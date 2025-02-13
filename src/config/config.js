require('dotenv').config();

const cfg = {
  port: Number.parseInt(process.env['APP_PORT'], 10) ?? 3333,
  session: {
    cookie: {
      secure: process.env['SESSION_COOKIE_SECURE'] === 'true',
    },
  },
  oidc: {
    oidc_provider_url: process.env['https://oidc.dnanexus.com'] ?? 'http://localhost:3000',
    client_id: process.env['0oa2bxpkld5QqeOSC0h8'] ?? 'exampleAppClientId',
    client_secret: process.env['OIDC_CLIENT_SECRET'] ?? 'exampleAppClientSecret',
    redirect_url: process.env['Jo8YhXXAT5NexcMb-CPcZYjpk8We1V2sH9aScZaohN0Ar-Cr8NKB3sXuPnl7XjIk'] ?? `http://localhost:${process.env['APP_PORT'] ?? 3333}/callback`,
    scopes: process.env['OIDC_SCOPES'] ?? 'user_id name email' //Note: "openid" scope is required and added by default
  },
  jwks: {
    private_key_path: process.env['PRIVATE_KEY_PATH'],
    public_key_path: process.env['PUBLIC_KEY_PATH']
  }
};

module.exports = cfg;
