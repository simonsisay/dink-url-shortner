const fs = require("fs");

const getDirectoryNames = dirPath => {
  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
};

module.exports.getDirectoryNames = getDirectoryNames;
