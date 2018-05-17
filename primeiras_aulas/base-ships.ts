class Spacecraft {
    
        constructor (public propulsor: string){}
    
        jumIntoHyperspace(){
            console.log(`Entering hyperspace with ${this.propulsor}`)
        }
}

interface Containership{
    cargoContainers: number
}

export{Spacecraft, Containership}