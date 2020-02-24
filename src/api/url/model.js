const { Model } = require("objection");

class Url extends Model {
  static get tableName() {
    return "url";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["original", "short"],
      properties: {
        original: { type: "text", min: "5", maxLength: 500 },
        short: { type: "string" }
      }
    };
  }
}

module.exports = Url;
