const rootServices = require("../services/rootServices");

const rootPath = async () => {
  const root = await rootServices.basePath();
  res.json(root);
};

module.exports = {rootPath};
