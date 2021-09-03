//@ts-check
const CleanCSS = require("clean-css")

module.exports = function (eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true)

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles
  })

  eleventyConfig.addFilter("getCollectionHome", function(collection, page) {
    const current = collection.find((cur) => {
      return cur.url == page.url
    })
    return current.data.collectionHome
  })

  eleventyConfig.addShortcode("ruby", function (char, rt) {
    return `<ruby>${char}<rp>(</rp><rt>${rt}</rt><rp>)</rp></ruby>`
  })

  eleventyConfig.addCollection("jlptN5", function (collectionApi) {
    return collectionApi.getFilteredByGlob("notes/jlpt-n5-study-log/**/*.md")
  })

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"],
  }
}
