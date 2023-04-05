const addThreeDocs = (stringVal: string | undefined, length = 16) => {
  if (typeof stringVal === 'string') {
    if (stringVal.length > length) {
      return stringVal.substring(0, length).concat('...');
    }
  }
  return stringVal;
};

export default addThreeDocs;
