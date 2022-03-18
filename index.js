const app = require("./app/app");

app.listen(app.get("port"), (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server is listening on http://localhost:" + app.get("port"));
});
