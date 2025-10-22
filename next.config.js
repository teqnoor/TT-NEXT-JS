const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 🚨 disables lint check during build
  },
  output: "export", // ✅ enables static export
  basePath: "", // no base path
  assetPrefix: "./", // ✅ use relative paths for CSS/JS
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',
    unoptimized: true,
  },
};

module.exports = nextConfig;
