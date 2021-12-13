export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Fosscord",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      { name: "og:title", content: "Fosscord - For better and secure communication" },
      { name: "og:description", content: "Fosscord is a free and open source software compatible with Discord. It's a chat, voice and video platform similar to Slack and Rocket.chat." }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/bootstrap.min.css", "@/assets/css/style.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/markdownit", "@nuxtjs/robots"],
  markdownit: {
    runtime: true, // Support `$md()`
    html: true,
    xhtmlOut: true,
    breaks: true,
    langPrefix: "language-",
    linkify: true,
    typographer: true,
    maxNesting: 100
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  target: "static",

  //Crawler Instruction
  robots: {
    UserAgent: '*',
    Disallow: ''
  }
};
