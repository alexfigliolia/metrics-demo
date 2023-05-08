const path = require('path');

const SRC = path.resolve("./src");

module.exports = {
  webpack: {
    alias: {
			"Actions": path.join(SRC, "Actions"),
			"Components": path.join(SRC, "Components"),
			"Reducers": path.join(SRC, "Reducers"),
			"Tools": path.join(SRC, "Tools"),
			"Routing": path.join(SRC, "Routing"),
    },
  },
};