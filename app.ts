class Spacecraft {

    constructor (public propulsor: string){}

    jumIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

let shipt = new Spacecraft('hyperdrive')
shipt.jumIntoHyperspace()

class MillenniumFalcon extends Spacecraft implements Containership{

    cargoContainers: number 

    constructor(){
        super('hyperdrive')
        this.cargoContainers = 4
    }

    jumIntoHyperspace(){
        if(Math.random() >= 0.5){
            super.jumIntoHyperspace()
        }else { console.log('Failed to jump into hyperspace')}
    }
}

let falcon = new MillenniumFalcon()

falcon.jumIntoHyperspace()

interface Containership{
    cargoContainers: number
}

let goodForTheJob = (ship: Containership ) => ship.cargoContainers > 2

console.log(`Is falcon good for the job? ${goodForTheJob ( falcon ) ? 'yes' : 'no' }`)