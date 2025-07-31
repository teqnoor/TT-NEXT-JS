const nextConfig = {
  output: "export", // ✅ enables static export
  basePath: "", // 👈 VERY IMPORTANT
  assetPrefix: "", // 👈 ensure CSS/JS loads correctly
};

module.exports = nextConfig;
