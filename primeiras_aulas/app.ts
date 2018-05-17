import { Spacecraft, Containership } from "./base-ships";
import { MillenniumFalcon } from "./starfighters";


let shipt = new Spacecraft('hyperdrive')
shipt.jumIntoHyperspace()

let falcon = new MillenniumFalcon()

falcon.jumIntoHyperspace()

let goodForTheJob = (ship: Containership ) => ship.cargoContainers > 2

console.log(`Is falcon good for the job? ${goodForTheJob ( falcon ) ? 'yes' : 'no' }`)