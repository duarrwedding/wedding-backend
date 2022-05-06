const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes/invitationRoutes");
const PORT = process.env.PORT || 4000;
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Connected on Port ${PORT}`);
});
