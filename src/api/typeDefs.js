const path = require("path");
const { getDirectoryNames } = require("../utils/getDirectoryNames");
const { fileLoader, mergeTypes } = require("merge-graphql-schemas");

const directories = getDirectoryNames(__dirname);

let typeDefsArray = [];
directories.forEach(apiDirectory => {
  let typedef = fileLoader(path.join(__dirname, apiDirectory));
  typeDefsArray = [...typeDefsArray, ...typedef];
});

module.exports.typeDefs = mergeTypes(typeDefsArray, { all: true });
