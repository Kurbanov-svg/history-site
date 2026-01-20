/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "gdb.rferl.org" },
      { protocol: "https", hostname: "data.kaktus.media" },
      { hostname: "i.vuzopedia.ru" },
    ],
  },
};

export default nextConfig;
