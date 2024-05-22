export const replaceMongoIdInArray = (array) => {
  const mappedArray = array
    .map((item) => {
      return {
        id: item._id.toString(),
        ...item,
      };
    })
    .map(({ _id, ...rest }) => rest);

  return mappedArray;
};

export const replaceMongoIdInObject = (obj) => {
  const { _id, ...updatedObj } = { ...obj, id: obj._id.toString() };
  return updatedObj;
};

export function removeDuplicatesByProperty(array, property) {
  const seen = new Set();
  return array.filter((item) => {
    const isDuplicate = seen.has(item[property]);
    seen.add(item[property]);
    return !isDuplicate;
  });
}
