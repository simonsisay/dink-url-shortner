const Url = require("../url/model");
const uuid = require("uuid/v4");

const Query = {
  allUrls: async () => {
    const urls = await Url.query();
    return urls;
  }
};

const Mutation = {
  createLink: async (_, args, ctx, info) => {
    const shortHash = uuid().slice(0, 4);
    const url = await Url.query().insert({
      original: args.original,
      short: shortHash
    });
    return url;
  }
};

module.exports = {
  Mutation,
  Query
};
