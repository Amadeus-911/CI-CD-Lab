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
function selectionSort(arr) {
  if (stryMutAct_9fa48("96")) {
    {}
  } else {
    stryCov_9fa48("96");
    let n = arr.length;
    for (let i = 0; stryMutAct_9fa48("99") ? i >= n : stryMutAct_9fa48("98") ? i <= n : stryMutAct_9fa48("97") ? false : (stryCov_9fa48("97", "98", "99"), i < n); stryMutAct_9fa48("100") ? i-- : (stryCov_9fa48("100"), i++)) {
      if (stryMutAct_9fa48("101")) {
        {}
      } else {
        stryCov_9fa48("101");
        let min = i;
        for (let j = stryMutAct_9fa48("102") ? i - 1 : (stryCov_9fa48("102"), i + 1); stryMutAct_9fa48("105") ? j >= n : stryMutAct_9fa48("104") ? j <= n : stryMutAct_9fa48("103") ? false : (stryCov_9fa48("103", "104", "105"), j < n); stryMutAct_9fa48("106") ? j-- : (stryCov_9fa48("106"), j++)) {
          if (stryMutAct_9fa48("107")) {
            {}
          } else {
            stryCov_9fa48("107");
            if (stryMutAct_9fa48("111") ? arr[j] >= arr[min] : stryMutAct_9fa48("110") ? arr[j] <= arr[min] : stryMutAct_9fa48("109") ? false : stryMutAct_9fa48("108") ? true : (stryCov_9fa48("108", "109", "110", "111"), arr[j] < arr[min])) {
              if (stryMutAct_9fa48("112")) {
                {}
              } else {
                stryCov_9fa48("112");
                min = j;
              }
            }
          }
        }
        if (stryMutAct_9fa48("115") ? min == i : stryMutAct_9fa48("114") ? false : stryMutAct_9fa48("113") ? true : (stryCov_9fa48("113", "114", "115"), min != i)) {
          if (stryMutAct_9fa48("116")) {
            {}
          } else {
            stryCov_9fa48("116");
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
          }
        }
      }
    }
    return arr;
  }
}
console.log(selectionSort(stryMutAct_9fa48("117") ? [] : (stryCov_9fa48("117"), [2, 1, 4, 3])));
module.exports = stryMutAct_9fa48("118") ? {} : (stryCov_9fa48("118"), {
  selectionSort
});