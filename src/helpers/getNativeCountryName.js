const getNativeCountryName = (obj) => obj[Object.keys(obj)[0]].common;

export default getNativeCountryName;
