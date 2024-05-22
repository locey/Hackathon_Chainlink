/*
 * @Author: Jacket-mzl
 * @Date: 2024-05-20 09:33:03
 * @LastEditors: Jacket-mzl
 * @LastEditTime: 2024-05-22 22:06:36
 * @Description:
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
};

module.exports = nextConfig;
