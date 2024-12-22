const Dataset = require('./dataset');

(async () => {

    path_to_components = './data/components.csv'
    path_to_test_data = './data/test_data.csv'

    const component_data = new Dataset(path_to_components);
    const test_data = new Dataset(path_to_test_data);

    // load the csv data
    await component_data.loadFromCsv()
    await test_data.loadFromCsv()

    // check some attributes of the data
    // console.log(dataset.wavel_max, dataset.wavel_min, dataset.headers, dataset.data.map(row => row[1])
    // const columnValues = dataset.data.map(row => row[1]);
    // console.log(dataset.headers[1])

    // let dye_vector = test_data.getDyeVector(1)
    // console.log(dye_vector.dye_name, dye_vector.dye_data)

    // dye_vector = test_data.getDyeVector(153)
    // console.log(dye_vector.dye_name, dye_vector.dye_data)

    console.log('Finished loading data.')
})();