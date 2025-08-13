/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Needed for Amplify SSR hosting
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
};

export default nextConfig;
