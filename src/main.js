const Dataset = require('./dataset');

(async () => {

    path_to_data = './data/components.csv'
    const dataset = new Dataset(path_to_data);

    // load the csv data
    await dataset.loadFromCsv()

    console.log(dataset.wavels)

    console.log('Finished loading data.')
})();