const toNumber = str => Number(str);

const range = (from, to) => {
  const too = to + 1;
  if (from > too) {
    throw new RangeError(`The input ${from}-${to} is invalid. Start must be smaller than end.`);
  };

  const l = too - from;

  const arr = Array(l);
  let i = 0;

  while (i + from < too) {
    arr[i] = i + from;
    i += 1;
  }

  return arr;
};

const map = (fn, arr) => {
  let idx = 0;
  const len = arr.length;
  const result = Array(len);

  while (idx < len) {
    result[idx] = fn(arr[idx]);
    idx += 1;
  }

  return result;
};

const replace = (rep, replacer) => str => str.replace(rep, replacer)

const split = sep => str => str.split(sep);

export { toNumber, range, map, replace, split };
