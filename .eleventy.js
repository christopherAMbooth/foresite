module.exports = function(eleventyConfig) {
  // Tell Eleventy to copy the 'public' directory to the output folder
  eleventyConfig.addPassthroughCopy("public");

  // Sort posts by date for the 'post' collection
  eleventyConfig.addCollection("post", function (collectionApi) {
    return collectionApi.getFilteredByTag("post").sort(function (a, b) {
      return a.date - b.date;
    });
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
  };
};
