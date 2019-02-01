const withLess = require("@zeit/next-less");
const lessCustomVars = require("./css/lessCustomVars");

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: lessCustomVars
  },
  distDir: "../../dist/functions/next"
});
