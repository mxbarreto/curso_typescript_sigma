import {Spacecraft, Containership} from './base-ships'

export class MillenniumFalcon extends Spacecraft implements Containership{
    
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