const Dataset = require('./dataset');
const WavelInterp = require('./interpolater');

(async () => {

    path_to_components = './data/components.csv'
    path_to_test_data = './data/test_data.csv'

    const component_data = new Dataset(path_to_components);
    const test_data = new Dataset(path_to_test_data);

    // load the csv data
    await component_data.loadFromCsv()
    await test_data.loadFromCsv()

    // next would be to interpolate the wavelengths
    const wavels_new = WavelInterp(test_data, component_data);

    // finally would be to perform the least squares regression (either unconstrained or nonnegative )


    console.log('Finished loading data.')
})();
