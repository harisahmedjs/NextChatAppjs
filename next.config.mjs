/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'firebasestorage.googleapis.com',
          port: '',
          pathname: '/v0/b/**',  // Allow all paths from Firebase Storage
        },
      ],
    },
  };
  
  export default nextConfig;
  