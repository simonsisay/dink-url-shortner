const Url = require("../url/model");
const uuid = require("uuid/v4");

const Query = {
  allUrls: async () => {
    try {
      const urls = await Url.query();
      return urls;
    } catch (err) {
      throw new Error(err.message);
    }
  },

  getOriginal: async (_, args) => {
    const originalUrl = await Url.query().where("short", args.short);
    if (originalUrl.length === 1) {
      return originalUrl[0];
    } else {
      throw new Error("Not found");
    }
  }
};

const Mutation = {
  createLink: async (_, args) => {
    console.log(args.original);
    const hash = uuid().slice(0, 4);
    const urlAlreadyInUse = await Url.query().where("short", hash);

    if (urlAlreadyInUse.length) {
      throw new Error("Url already in use");
    }
    const url = await Url.query().insert({
      original: args.original,
      short: hash,
      created_at: new Date()
    });
    return url;
  }
};

module.exports = {
  Mutation,
  Query
};
