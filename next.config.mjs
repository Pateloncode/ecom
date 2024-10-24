/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com",
            },
            {
                protocol: "https",
                hostname: "static.wixstatic.com", // Add this for wixstatic images
            },
        ],
    },
};

export default nextConfig;
