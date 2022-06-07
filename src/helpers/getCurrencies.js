const getCurrencies = (obj) => {
  const currencies = [];
  for (const property in obj) {
    currencies.push(obj[property].name);
  }
  return currencies.join(", ");
};
export default getCurrencies;
