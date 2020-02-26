const path = require("path");
const { getDirectoryNames } = require("../utils/getDirectoryNames");
const { fileLoader, mergeResolvers } = require("merge-graphql-schemas");

const directories = getDirectoryNames(__dirname);

let allResolvers = [];
directories.forEach(apiDirectory => {
  let resolvers = fileLoader(
    path.join(__dirname, `/${apiDirectory}/./**/*.resolver.*`)
  );
  allResolvers = [...allResolvers, ...resolvers];
});

module.exports.resolvers = mergeResolvers(allResolvers);
