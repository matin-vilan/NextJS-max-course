const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "matinVilan",
        mongodb_password: "B86wu7UKiv8gQ3xK",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site",
      },
    };
  }

  return {
    env: {
      mongodb_username: "matinVilan",
      mongodb_password: "B86wu7UKiv8gQ3xK",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};
