/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  headers: [
    {
      key: "Access-Control-Allow-Origin",
      value: "*",
    },
    {
      key: "Access-Control-Allow-Headers",
      value: "Origin, X-Requested-With, Content-Type, Accept",
    },
  ],
};

module.exports = nextConfig;
