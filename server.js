'use strict';

var app = require('./app.js');

require('greenlock-express')
    .init({
        packageRoot: __dirname,

        // manager: {
        //     module: './manager.js'
        // },

        // contact for security and critical bug notices
        maintainerEmail: "domabenedek1017@hotmail.com",

        // where to look for configuration
        configDir: './greenlock.d',

        // whether or not to run at cloudscale
        cluster: false
    })
    // Serves on 80 and 443
    // Get's SSL certificates magically!
    .serve(app);
