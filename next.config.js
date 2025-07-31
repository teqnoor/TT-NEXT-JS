const nextConfig = {
   eslint: {
    ignoreDuringBuilds: true, // 🚨 disables lint check during build
  },
  output: "export", // ✅ enables static export
  basePath: "", // 👈 VERY IMPORTANT
  assetPrefix: "", // 👈 ensure CSS/JS loads correctly
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',
    unoptimized: true,
  },
};

module.exports = nextConfig;
