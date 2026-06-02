const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("First Middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("second Middleware");
//   res.send("<h1>Hello  World!</h1>");
// });

app.use("/users", (req, res, next) => {
  res.send("<h1>Users Page</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Home Page</h1>");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
