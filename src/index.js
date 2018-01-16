import { toNumber, range, map, replace, split } from './utils';

const clearWhitespace = replace(/\s+/g, '');
const splitCommas = split(',');
const splitDash = split('-');

const ranger = str => {
  const cleaned = clearWhitespace(str);
  const separateInputs = splitCommas(cleaned);
  
  return separateInputs.reduce((acc, input) => {
    const val = toNumber(input);
    if (!Number.isNaN(val)) return acc.concat(val);
    
    const fromTo = map(toNumber, splitDash(input));
    const r = range(fromTo[0], fromTo[1]);

    return acc.concat(r);
  }, []);
};

export { ranger as default };
