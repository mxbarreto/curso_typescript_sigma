"use strict";
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
var _ = require("lodash");
console.log(_.pad("Typescripts Examples", 40, "="));
var shipt = new base_ships_1.Spacecraft('hyperdrive');
shipt.jumIntoHyperspace();
var falcon = new starfighters_1.MillenniumFalcon();
falcon.jumIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'yes' : 'no'));
console.log(_.pad("Fim Typescritps", 40, "="));
