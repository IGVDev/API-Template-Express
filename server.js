const app = require("./src/config/app");

const server = app.listen(process.env.port || 3001, () => {
  console.log(`Server listening on ${server.address().port}`);
});
