// Our linting for this project is bootstrapped from itself. To do this,
// use pnpm build.

const recommended = require("./lib/configs/recommended").default;

recommended.plugins = recommended.plugins.filter((e) => e !== "cadence");
delete recommended.rules["cadence/case-blocks"];

module.exports = recommended;
