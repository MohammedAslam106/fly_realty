/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'www.destinationhomes.com',
            port: '',
            pathname: '/**',
        },
        {
            protocol: 'https',
            hostname: 's3.amazonaws.com',
            port: '',
            pathname: '/**',
        },
        {
            protocol: 'https',
            hostname:'dlqxt4mfnxo6k.cloudfront.net',
            port: '',
            pathname: '/**',
        }
    ],
    }
}

module.exports = nextConfig
