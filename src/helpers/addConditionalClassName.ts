const addConditionalClassName = (
  classnamesString: string,
  classnamesObject:
    | { selected: boolean }
    | { disabled: boolean }
    | { [x: string]: string }
) => {
  let value = Object.values(classnamesObject);

  if (Array.isArray(value)) {
    const first = [...value];
    value = first;
  }

  return value
    ? `${classnamesString} ${Object.keys(classnamesObject)}`
    : classnamesString;
};

export default addConditionalClassName;
