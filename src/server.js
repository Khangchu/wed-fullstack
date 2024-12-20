require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const hostname = process.env.HOSTNAME;
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');
configViewEngine(app);
app.use("/",webRouter);
app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port},${hostname}`);
})