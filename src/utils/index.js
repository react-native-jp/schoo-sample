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
