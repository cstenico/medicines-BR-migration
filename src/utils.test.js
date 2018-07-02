const utils = require('./utils');


const { makeDictionary, parseAmountToFloat, parseDate } = utils;

test('make dictionary', () => {
  const data = [
    {
      id: 34,
      name: 'a'
    },
    {
      id: 99,
      name: 'a'
    },
  ];

  const expected = {
    '34': {
      id: 34,
      name: 'a'
    },
    '99': {
      id: 99,
      name: 'a'
    },
  };
  
  expect(makeDictionary({data, byField: 'id'})).toEqual(expected);
});


describe('parseAmountToFloat', () => {
  test('empty string returns 0', () => {
    expect(parseAmountToFloat('')).toBe(0.0);
  });
  
  test('comma values are parsed correctly', () => {
    expect(parseAmountToFloat('34,56')).toBe(34.56);
  });
  
  test('dotted values should work too', () => {
    expect(parseAmountToFloat('99.11')).toBe(99.11);
  });
  
  test('if it\'s a float keep it that way', () => {
    expect(parseAmountToFloat(1.78)).toBe(1.78);
  });
});

describe('parse date', () => {
  test('brazilian format', ()=> {
    expect(parseDate('12/1/1992')).toEqual(new Date(1992, 11, 1));
    expect(parseDate('1/16/1992')).toEqual(new Date(1992, 0, 16));
    expect(parseDate('1/12/1992 0:00')).toEqual(new Date(1992, 0, 12));
    expect(parseDate('9/21/2017 0:00:00')).toEqual(new Date(2017, 8, 21));
  });
});