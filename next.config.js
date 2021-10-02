module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    googleMapsApiKey: "AIzaSyBhXo3dTiUDb_RTL__jn39l2cSOb0OQVqk",
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: "/static",
  },
};
