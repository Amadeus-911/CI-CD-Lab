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
function insertionSort(arr) {
  if (stryMutAct_9fa48("41")) {
    {}
  } else {
    stryCov_9fa48("41");
    let n = arr.length;
    for (let i = 1; stryMutAct_9fa48("44") ? i >= n : stryMutAct_9fa48("43") ? i <= n : stryMutAct_9fa48("42") ? false : (stryCov_9fa48("42", "43", "44"), i < n); stryMutAct_9fa48("45") ? i-- : (stryCov_9fa48("45"), i++)) {
      if (stryMutAct_9fa48("46")) {
        {}
      } else {
        stryCov_9fa48("46");
        let current = arr[i];
        let j = stryMutAct_9fa48("47") ? i + 1 : (stryCov_9fa48("47"), i - 1);
        while (stryMutAct_9fa48("49") ? j > -1 || current < arr[j] : stryMutAct_9fa48("48") ? false : (stryCov_9fa48("48", "49"), (stryMutAct_9fa48("52") ? j <= -1 : stryMutAct_9fa48("51") ? j >= -1 : stryMutAct_9fa48("50") ? true : (stryCov_9fa48("50", "51", "52"), j > (stryMutAct_9fa48("53") ? +1 : (stryCov_9fa48("53"), -1)))) && (stryMutAct_9fa48("56") ? current >= arr[j] : stryMutAct_9fa48("55") ? current <= arr[j] : stryMutAct_9fa48("54") ? true : (stryCov_9fa48("54", "55", "56"), current < arr[j])))) {
          if (stryMutAct_9fa48("57")) {
            {}
          } else {
            stryCov_9fa48("57");
            arr[stryMutAct_9fa48("58") ? j - 1 : (stryCov_9fa48("58"), j + 1)] = arr[j];
            stryMutAct_9fa48("59") ? j++ : (stryCov_9fa48("59"), j--);
          }
        }
        arr[stryMutAct_9fa48("60") ? j - 1 : (stryCov_9fa48("60"), j + 1)] = current;
      }
    }
    return arr;
  }
}
console.log(insertionSort(stryMutAct_9fa48("61") ? [] : (stryCov_9fa48("61"), [2, 1, 4, 3])));
module.exports = stryMutAct_9fa48("62") ? {} : (stryCov_9fa48("62"), {
  insertionSort
});