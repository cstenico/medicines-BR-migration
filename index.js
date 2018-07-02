const program = require('commander');
var fs = require('fs');
const parse = require('./src/parse');

const formatMedicines = require('./src/formatter/medicine');

//The directory with the files to be parsed
const DIRECTORY = './dump/';

const handleError = (err) => {
  console.error('Ops... something went wrong\n\n'); //eslint-disable-line no-console
  console.error(err.stack); //eslint-disable-line no-console
};

program
  .version('2.0.0')
  .parse(process.argv);

console.log('Government Data Parser');//eslint-disable-line no-console

parse(DIRECTORY + 'TA_PRECOS_MEDICAMENTOS.csv').then((data) => {

  const medicines = formatMedicines({medicines: data});
  fs.writeFile('dump/med.json', JSON.stringify(medicines), function(err) {
    if (err) {
      console.log(err);
    }
  });
}).then(() => {
  console.log('All data have been parsed and formated. HANG ON... there may be files still being saved. Wait until the process exits.'); //eslint-disable-line no-console
}).catch(handleError);