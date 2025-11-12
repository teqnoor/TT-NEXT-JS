const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  basePath: "",        // no base path
  trailingSlash: true, // ensures exported HTML and assets have trailing slash for correct paths
  images: {
    loader: "custom",
    loaderFile: "./image-loader.js",
    unoptimized: true,
  },
};

module.exports = nextConfig;
