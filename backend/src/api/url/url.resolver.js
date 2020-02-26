const Url = require("../url/model");
const uuid = require("uuid/v4");

const Query = {
  allUrls: async () => {
    const urls = await Url.query();
    return urls;
  }
};

const Mutation = {
  createLink: async (_, args) => {
    const urlAlreadyInUse = await Url.query().where("original", args.original);

    if (urlAlreadyInUse.length) {
      throw new Error("Url already in use");
    }
    const shortHash = uuid().slice(0, 4);
    const url = await Url.query().insert({
      original: args.original,
      short: shortHash,
      created_at: new Date()
    });
    return url;
  }
};

module.exports = {
  Mutation,
  Query
};
