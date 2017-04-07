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
