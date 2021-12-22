const rootPathService = (res) => {
  try {
    res.send("All systems online");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { rootPathService };
