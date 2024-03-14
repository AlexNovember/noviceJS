const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/homeworks/" : "/",
  pages: {
    // not_found: {
    //   entry: "src/not_found/main.js",
    //   template: "public/not_found.html",
    //   filename: "not_found.html",
    //   title: process.env.VUE_APP_NAME || "Application",
    // },
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: process.env.VUE_APP_NAME || "Application",
    },
    // blog: {
    //   entry: "src/blog/main.js",
    //   template: "public/blog.html",
    //   filename: "blog.html",
    //   title: process.env.VUE_APP_NAME || "Application",
    // },
    // blog_details: {
    //   entry: "src/blog_details/main.js",
    //   template: "public/blog_details.html",
    //   filename: "blog_details.html",
    //   title: process.env.VUE_APP_NAME || "Application",
    // },
    // project: {
    //   entry: "src/project/main.js",
    //   template: "public/project.html",
    //   filename: "project.html",
    //   title: process.env.VUE_APP_NAME || "Application",
    // },
    project_details: {
      entry: "src/project_details/main.js",
      //   template: "public/project_details.html",
      //   filename: "project_details.html",
      //   title: process.env.VUE_APP_NAME || "Application",
    },
  },
  transpileDependencies: true,
});
