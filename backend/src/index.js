require("dotenv").config();
const express = require("express");
const { redirectToSite } = require("./api/redirect");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const Knex = require("knex");
const { Model } = require("objection");
const connection = require("../knexfile");
const bodyParser = require("body-parser");
const { typeDefs, resolvers } = require("./api");

const env = process.env.NODE_ENV || "development";

const knexConnection = Knex(connection[env]);

Model.knex(knexConnection);

const app = express();

app.use(bodyParser.json());

app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({
    req,
    res
  })
});

app.use("/redirect/:url", redirectToSite);

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log("App running on http://localhost:4000" + server.graphqlPath);
});
