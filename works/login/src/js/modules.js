const modules = {};
modules.store = [];
modules.define = function define(fn) {
  modules.store.push(fn);
};
modules.run = function run() {
  modules.store.forEach(fn => fn(modules));
};
