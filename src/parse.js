const xml2js = require('xml2js');
const fs = require('fs');
const csv = require('csv');


const benchmark = (function() {
  let initialTime;

  return {
    reset: () => initialTime = new Date(),
    elapsed: () => ((new Date()) - initialTime)/1000,
    getCurrent: () => initialTime,
  };
})();


module.exports = function parse(filename, {format='csv'} = {}) {
  if(benchmark.getCurrent()) {
    console.info('\t[FORMATTING] ' + benchmark.elapsed() + 's');//eslint-disable-line no-console
  }
  benchmark.reset();
  console.info('Processing ' + filename);//eslint-disable-line no-console
  return new Promise((resolve, reject) => {
    
    fs.readFile(filename, (err, data) => {
      if(format === 'csv' || format === 'CSV') {
        csv.parse(data, {auto_parse: true, delimiter: ';', columns: true}, (err, output) => {
          if(err) { 
            console.error('Error parsing ' + filename); //eslint-disable-line no-console
            return reject(err);
          }
          console.info('\t[PARSING] ' + benchmark.elapsed() + 's');//eslint-disable-line no-console
          benchmark.reset();
          resolve(output);
        });
      } else if(format === 'xml' || format === 'XML') {
        xml2js.parseString(data, function (err, result) {
          if(err) return reject(err);
          resolve(result);
        });
      } else {
        reject(new Error('Format must be specied as csv or xml'));
      }
    });
  });
};