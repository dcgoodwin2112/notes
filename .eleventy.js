module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("ruby", function(char, rt) {
    return `<ruby>${char}<rp>(</rp><rt>${rt}</rt><rp>)</rp></ruby>`
  });

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"],
  }
}
