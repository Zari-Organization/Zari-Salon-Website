const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: '/zarisalon/'
});



// module.exports = {
//   publicPath: process.env.NODE_ENV === "production" ? "/Zari-Salon-Website/" : "/",
// };


module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Zari-Salon-Website/'
    : '/'
}