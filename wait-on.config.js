module.exports = {
  resources: ["http://localhost:3000/api/graphql"],
  validateStatus: (status) => status === 405,
};
