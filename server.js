const db = require("./sequelize");
const app = require("./app");

const { PORT } = process.env;

db.authenticate()
  .then(
    app.listen(PORT, () => {
      console.log("Database connection successful");
      console.log("PORT", PORT);
      console.log("db", db);
    })
  )
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
