const path = require('path');

const SRC = path.resolve("./src");

module.exports = {
	webpack: {
		alias: {
			"Components": path.join(SRC, "Components"),
			"Models": path.join(SRC, "Models"),
			"Routing": path.join(SRC, "Routing"),
			"State": path.join(SRC, "State"),
			"Tools": path.join(SRC, "Tools"),
		},
	},
};