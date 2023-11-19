/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_LOCAL_URI: "mongodb://localhost:27017/placebooking",
    DB_URI: "",
  },
};

module.exports = nextConfig;
