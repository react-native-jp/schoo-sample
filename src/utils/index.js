export const makePairs = items => {
  const pairedItems = [];
  const length = Math.floor(items.length / 2);

  for (let i = 0; i < length; ++i) {
    pairedItems.push({
      key: i,
      left: items[2 * i],
      right: items[2 * i + 1],
    });
  }
  if (items.length % 2 === 1) {
    pairedItems.push({
      key: length,
      left: items[items.length - 1],
      right: {
        uri: undefined,
      },
    });
  }

  return pairedItems;
};

const hasOwnProperty = (obj, property) => (
  Object.prototype.hasOwnProperty.call(obj, property)
);

export const deepFreeze = target => {
  Object.freeze(target);
  for (const key in Object.keys(target)) {
    if (!hasOwnProperty(target, [key])) {
      continue;
    }

    const value = target[key];

    if (!(typeof value === 'object') || Object.isFrozen(value)) {
      continue;
    }

    deepFreeze(value);
  }
};
