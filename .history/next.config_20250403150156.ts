import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
	remotePatterns: [
	  {
		protocol: 'https',
		hostname: '*',
	  },
	],
  },
  transpilePackages: ["sanity"]
};

export default nextConfig;
