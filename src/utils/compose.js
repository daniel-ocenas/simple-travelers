module.exports =
  (...fns) =>
  (config) =>
    fns.filter(Boolean).reduceRight((acc, fn) => fn(acc), config);
