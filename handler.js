const serverless = require("serverless-http");
const express = require("express");
const app = express();
const teste = require("./lambdaFunc");

app.get("/", (req, res, next) => {
  res.status(200).send('Oi')
});


app.get("/:id", (req, res, next) => {
  const id = req.params.id
  res.status(200).send(teste(id))
});

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
