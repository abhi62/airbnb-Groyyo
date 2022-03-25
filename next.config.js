const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },

  images: {
    domains: [
      "a0.muscache.com",
      "res.cloudinary.com",
      "lh3.googleusercontent.com",
    ],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoiYWJoaTcyNjIiLCJhIjoiY2wwZTVpMzE2MGZzNzNjcG9uYTlzbzRveSJ9.hiMFaDcyzjmbr91nbn1fzw",
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
});
