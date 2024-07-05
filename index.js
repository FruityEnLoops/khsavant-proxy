const express = require("express");
const config = require("./config.json");
const package = require("./package.json");
const cors = require('cors')
const app = express();

const proxyRoute = require('./routes/proxy');

app.use(express.json())
app.use(cors())
app.listen(config.port, function () {
  console.log(`Started khsavant-proxy v${package.version} on port ${config.port}`);
});

app.use(`${config.baseprefix}/`, proxyRoute);

app.get(`${config.baseprefix}/status`, function (req, res) {
  res.status(200).send({
    status: "ok",
    message: `Running khsavant-proxy v${package.version} on port ${config.port} and base prefix ${config.baseprefix}.`,
  });
});
