// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
function add(a, b) {
  if (stryMutAct_9fa48("0")) {
    {}
  } else {
    stryCov_9fa48("0");
    return stryMutAct_9fa48("1") ? a - b : (stryCov_9fa48("1"), a + b);
  }
}
function subtract(a, b) {
  if (stryMutAct_9fa48("2")) {
    {}
  } else {
    stryCov_9fa48("2");
    return stryMutAct_9fa48("3") ? a + b : (stryCov_9fa48("3"), a - b);
  }
}
function multiply(a, b) {
  if (stryMutAct_9fa48("4")) {
    {}
  } else {
    stryCov_9fa48("4");
    return stryMutAct_9fa48("5") ? a / b : (stryCov_9fa48("5"), a * b);
  }
}
function divide(a, b) {
  if (stryMutAct_9fa48("6")) {
    {}
  } else {
    stryCov_9fa48("6");
    return stryMutAct_9fa48("7") ? a * b : (stryCov_9fa48("7"), a / b);
  }
}
console.log(add(2, 3));
module.exports = stryMutAct_9fa48("8") ? {} : (stryCov_9fa48("8"), {
  add,
  subtract,
  multiply,
  divide
});