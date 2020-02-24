require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const Knex = require("knex");
const { Model } = require("objection");
const connection = require("../knexfile");
const bodyParser = require("body-parser");
const { typeDefs } = require("./api/typeDefs");
const { resolvers } = require("./api/resolvers");

const env = process.env.NODE_ENV || "development";

const knexConnection = Knex(connection[env]);

Model.knex(knexConnection);

const app = express();

app.use(bodyParser.json());

app.use(cors());

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log("App running on http://localhost:4000" + server.graphqlPath);
});
