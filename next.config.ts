import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://mc-heads.net/body/Rysenz'), new URL('https://mc-heads.net/avatar/Rysenz')],
},
};

export default nextConfig;
