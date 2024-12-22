// src/dataset.js
const fs = require('fs').promises

class Dataset{

    constructor(path_to_data){
        this.filepath = path_to_data
        this.wavels = [];
        this.data = [];
        this.headers = [];
        this.wavel_max = 0;
        this.wavel_min = 0;
    }

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
                let line = lines[nth_line].split(',')

                // print it out atm
                if (nth_line > 0){
                    this.wavels.push(line[0])
                }
            }
        }
        catch (err){
            console.error('Error reading file :', err);
        }
    }
}

// Export the Dataset class so it can be imported elsewhere
module.exports = Dataset;