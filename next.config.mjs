/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export only for production builds (used for the urfua.company deploy).
  // In dev the export mode breaks the preview server, so keep it off there.
  ...(process.env.NODE_ENV === "production" ? { output: "export" } : {}),
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
