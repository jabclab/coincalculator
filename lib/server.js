/**
 * @file Defines and starts HTTP server for CoinCalculator.
 * @author Jake Clarkson
 */
var fs = require('fs');
var path = require('path');
var Hapi = require('hapi');

// Get routes dynamically via the contents of the 'routes' directory.
var server = new Hapi.Server('localhost', process.env.CC_PORT || 7777);

// Add HTTP routes into HTTP server.
var routesDir = path.join(__dirname, 'routes');
var routes = fs.readdirSync(routesDir).map(function loadRoute(route) {
    return require(path.join(routesDir, route));
});

server.route(routes);

// TODO: winston info logging required here
server.start();
