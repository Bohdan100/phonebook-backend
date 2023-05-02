const db = require("./sequelize");
const app = require("./app");

const { PORT } = process.env;

db.authenticate()
  .then(
    app.listen(PORT, () => {
      console.log("Database connection successful");
    })
  )
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
