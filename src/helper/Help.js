const userFinder = (data, id) => {
  const find = data?.find((item) => item.id === id);
  return find;
};

export { userFinder };
