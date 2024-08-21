export default () => ({
    port: parseInt(process.env.SERVER_PORT, 10) || 3000,
    auth: {
      secretKeyJwt: process.env.SECRET_KEY_JWT,
    },
  });