class WavelInterp{

    constructor(dataset_1, dataset_2){

        // this will be the points we want to eveluate 
        this.wavel_upper = Math.max(dataset_1.wavel_max, dataset_2.wavel_max)
        this.wavel_lower = Math.min(dataset_1.wavel_min, dataset_2.wavel_min)

        
    }
} 

// Export the Dataset class so it can be imported elsewhere
module.exports = WavelInterp;