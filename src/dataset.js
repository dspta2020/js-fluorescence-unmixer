const path = require('path');

// src/dataset.js
const fs = require('fs').promises

class Dataset{

    constructor(path_to_data){
        // path to the file
        this.filepath = path_to_data

        // data to read
        this.wavels = [];
        this.data = [];
        this.headers = [];

        // derived from read data
        this.wavel_max = 0;
        this.wavel_min = 0;
    }

    // function for loading in the raw data from a csv file
    async loadFromCsv(){
        try{
            // log progress 
            console.log(`Reading in file from:\n${this.filepath}`)

            // us filesystem to read in the file
            const content = await fs.readFile(this.filepath, 'utf-8');
            // split the str into lines
            let lines = content.trim().split('\n');
            
            // get the numer of lines i need to iterate over to read the dat
            const num_lines = lines.length

            for (let nth_line = 0; nth_line < num_lines; nth_line++){
                
                // get the nth line 
                let line = lines[nth_line].split(',');

                // grab the data
                if (nth_line > 0){
                    // add the wavelength value to the wavel vector
                    this.wavels.push(+line[0]);
                    // add the data vector for each of the dyes to the nth row of the data array
                    // essentially represeting a 2D array as a list of lists
                    this.data.push(line.slice(1).map(Number));
                }
                // grab the dye names
                else if (nth_line == 0){
                    // this will add the array of sample names to the headers attribute
                    this.headers = line.slice(1);
                }
            }
        }
        // if the file cant be read or throws an error during grabbing the data
        catch (err){
            console.error('Error reading file :', err);
        }
        // once all the data is read in then just grab the max and min values
        this.getWavelMinMax(this.wavels);
    }

    getWavelMinMax(){
        // we'll need these for interpolation later
        this.wavel_max = Math.max(...this.wavels);
        this.wavel_min = Math.min(...this.wavels);
    }

    getDyeVector(dye_index){
        // return an object that tells you which dye vector is returned and then also the data
        let dye_data = this.data.map(row => row[dye_index]);
        let dye_name = this.headers[dye_index];

        // returns an object as dye_name and dye_data
        return {dye_name, dye_data}
    }
}

// Export the Dataset class so it can be imported elsewhere
module.exports = Dataset;