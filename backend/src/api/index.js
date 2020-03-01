const path = require("path");
const { getDirectoryNames } = require("../utils/getDirectoryNames");
const {
  fileLoader,
  mergeResolvers,
  mergeTypes
} = require("merge-graphql-schemas");

const directories = getDirectoryNames(__dirname);

// Merge all typedefs
let typeDefsArray = [];
directories.forEach(apiDirectory => {
  let typedef = fileLoader(path.join(__dirname, apiDirectory));
  typeDefsArray = [...typeDefsArray, ...typedef];
});

// Merge all resolvers
let allResolvers = [];
directories.forEach(apiDirectory => {
  let resolvers = fileLoader(
    path.join(__dirname, `/${apiDirectory}/./**/*.resolver.*`)
  );
  allResolvers = [...allResolvers, ...resolvers];
});

module.exports.typeDefs = mergeTypes(typeDefsArray, { all: true });
module.exports.resolvers = mergeResolvers(allResolvers);
