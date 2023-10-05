/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "build",
  images: {unoptimized: true},
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
