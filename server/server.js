const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");



dotenv.config({ path: "./config.env" });

// CONNECT MONGODB

const DB = process.env.DB.replace("<password>", process.env.DB_PASSWORD);
mongoose.set("strictQuery", true);
mongoose.connect(DB, {}, (err) => {
  if (err) {
    console.log(`un problème avec la base de donnée: ${err}`);
  } else {
    console.log(`BD connecté avec succès ✅`);
  }
});


const port = process.env.PORT || 5500;
app.listen(port, () => {
  console.log(`SERVER tourne correctement...✅ sur port ` + port);
});

