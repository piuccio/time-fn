const pretty = require('pretty-ms');

module.exports = async function(fn) {
  const start = Date.now();
  const result = await fn();
  const end = Date.now();
  console.log(`Done in ${pretty(end - start)}`); // eslint-disable-line no-console
  return result;
};
