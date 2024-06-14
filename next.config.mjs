/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.valorant-api.com",
      },
    ],
  },
  redirects: async () => [
    {
      source: "/local/:path*",
      destination: "http://localhost:3000/:path*",
      permanent: false,
    },
  ],
}

export default nextConfig
