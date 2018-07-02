module.exports.parseAmountToFloat = (amount) => {
  let parsedAmount = 0.0;
  if(!amount) {
    return parsedAmount;
  } else if(typeof amount === 'string' && amount !== '') {
    parsedAmount = amount.replace(',', '.');
    parsedAmount = parseFloat(parsedAmount);
  } else if(typeof amount === 'number') {
    return amount;
  }
  return parsedAmount;
};

module.exports.makeDictionary = function makeDictionary({data, byField}) {
  if(!data && Array.isArray(data)) throw Error('data should be array');
  if(!byField && typeof byField !== 'string') throw Error('byField must be string');

  return data.reduce((dictionary, item) => {
    dictionary[item[byField]] = item;
    return dictionary;
  }, {});
};


function removeHourFromDate(timestamp){
  let timestampArray = timestamp.split(' ');
  return timestampArray[0];
}

module.exports.removeHourFromDate = removeHourFromDate;
module.exports.parseDate = (date) => {
  if(date && typeof date === 'string' && date !== '') {
    const d = date.split(' ')[0].split('/');
    return new Date(d[2], parseInt(d[0])-1, d[1]);
  }
  if(date === '') {
    return null;
  }
  return date;
};

module.exports.addDays = function(date, days) {
  var dat = new Date(date.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
};
