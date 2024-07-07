const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*.com",
                port: ""
            },
            {
                protocol: "https",
                hostname: "example.com",
                port: ""
            }
        ]
    }
};

export default nextConfig;
