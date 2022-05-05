const { defineConfig } = require("@vue/cli-service");
module.exports = {
  defineConfig: defineConfig({
    transpileDependencies: true,
  }),
  publicPath: process.env.NODE_ENV === "production" ? "/rasta-reyhan/" : "/",
};
