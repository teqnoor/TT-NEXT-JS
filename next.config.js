const nextConfig = {
  output: "export", // ✅ enables static export
  basePath: "/tt", // 👈 VERY IMPORTANT
  assetPrefix: "/tt", // 👈 ensure CSS/JS loads correctly
};

module.exports = nextConfig;
