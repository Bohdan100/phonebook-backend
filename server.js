const db = require("./sequelize");
const app = require("./app");

const { PORT } = process.env;

db.authenticate()
  .then(console.log("db", db))
  .then(
    app.listen(PORT, () => {
      console.log("Database connection successful");
      console.log("PORT", PORT);
    })
  )
  .catch((err) => {
    console.log(err);
    console.log("err.message", err.message);
    process.exit(1);
  });
