/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.node = {
                net: 'empty'
            };
        }

        return config;
    }}

module.exports = nextConfig

