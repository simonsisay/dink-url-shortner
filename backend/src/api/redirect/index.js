const Url = require("../url/model");

const redirectToSite = async (req, res) => {
  const url = await Url.query().where("short", req.params.short);
  if (url.length === 0) {
    return res.status(404).send("No url found");
  }
  console.log(url);
};

module.exports = {
  redirectToSite
};
