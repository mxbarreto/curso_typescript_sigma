import { Spacecraft, Containership } from "./base-ships";
import { MillenniumFalcon } from "./starfighters";

import * as _ from 'lodash'
console.log(_.pad("Typescripts Examples", 40, "=" ))


let shipt = new Spacecraft('hyperdrive')
shipt.jumIntoHyperspace()

let falcon = new MillenniumFalcon()
falcon.jumIntoHyperspace()

let goodForTheJob = (ship: Containership ) => ship.cargoContainers > 2
console.log(`Is falcon good for the job? ${goodForTheJob ( falcon ) ? 'yes' : 'no' }`)

console.log(_.pad("Fim Typescritps", 40, "="))