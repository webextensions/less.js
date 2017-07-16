var environment = require("./environment-basic-less-with-sourcemap-support"),
    createFromEnvironment = require("../less"),
    less = createFromEnvironment(environment, []);

// allow people to create less with their own environment
less.createFromEnvironment = createFromEnvironment;
less.PluginLoader = require("./plugin-loader");
less.options = require('../less/default-options')();

module.exports = less;
