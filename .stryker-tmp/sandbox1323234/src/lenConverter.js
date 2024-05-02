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
function LengthConverter(measurement, val) {
  if (stryMutAct_9fa48("63")) {
    {}
  } else {
    stryCov_9fa48("63");
    var result1, result2;
    if (stryMutAct_9fa48("66") ? measurement != "feets" : stryMutAct_9fa48("65") ? false : stryMutAct_9fa48("64") ? true : (stryCov_9fa48("64", "65", "66"), measurement == (stryMutAct_9fa48("67") ? "" : (stryCov_9fa48("67"), "feets")))) {
      if (stryMutAct_9fa48("68")) {
        {}
      } else {
        stryCov_9fa48("68");
        result1 = (stryMutAct_9fa48("69") ? val / 12 : (stryCov_9fa48("69"), val * 12)).toFixed(2) + (stryMutAct_9fa48("70") ? "" : (stryCov_9fa48("70"), " inches"));
        result2 = (stryMutAct_9fa48("71") ? val * 5280 : (stryCov_9fa48("71"), val / 5280)).toFixed(2) + (stryMutAct_9fa48("72") ? "" : (stryCov_9fa48("72"), " miles"));
      }
    } else if (stryMutAct_9fa48("75") ? measurement !== "inches" : stryMutAct_9fa48("74") ? false : stryMutAct_9fa48("73") ? true : (stryCov_9fa48("73", "74", "75"), measurement === (stryMutAct_9fa48("76") ? "" : (stryCov_9fa48("76"), "inches")))) {
      if (stryMutAct_9fa48("77")) {
        {}
      } else {
        stryCov_9fa48("77");
        result1 = (stryMutAct_9fa48("78") ? val * 12 : (stryCov_9fa48("78"), val / 12)).toFixed(2) + (stryMutAct_9fa48("79") ? "" : (stryCov_9fa48("79"), " feets"));
        result2 = (stryMutAct_9fa48("80") ? val * 63360 : (stryCov_9fa48("80"), val / 63360)).toFixed(2) + (stryMutAct_9fa48("81") ? "" : (stryCov_9fa48("81"), " miles"));
      }
    } else if (stryMutAct_9fa48("84") ? measurement !== "miles" : stryMutAct_9fa48("83") ? false : stryMutAct_9fa48("82") ? true : (stryCov_9fa48("82", "83", "84"), measurement === (stryMutAct_9fa48("85") ? "" : (stryCov_9fa48("85"), "miles")))) {
      if (stryMutAct_9fa48("86")) {
        {}
      } else {
        stryCov_9fa48("86");
        result1 = (stryMutAct_9fa48("87") ? val / 5280 : (stryCov_9fa48("87"), val * 5280)).toFixed(2) + (stryMutAct_9fa48("88") ? "" : (stryCov_9fa48("88"), " feets"));
        result2 = (stryMutAct_9fa48("89") ? val / 63360 : (stryCov_9fa48("89"), val * 63360)).toFixed(2) + (stryMutAct_9fa48("90") ? "" : (stryCov_9fa48("90"), " inches"));
      }
    } else {
      if (stryMutAct_9fa48("91")) {
        {}
      } else {
        stryCov_9fa48("91");
        return stryMutAct_9fa48("92") ? "" : (stryCov_9fa48("92"), "wrong input");
      }
    }
    return stryMutAct_9fa48("93") ? [] : (stryCov_9fa48("93"), [result1, result2]);
  }
}
console.log(LengthConverter(stryMutAct_9fa48("94") ? "" : (stryCov_9fa48("94"), "mil"), 1));
module.exports = stryMutAct_9fa48("95") ? {} : (stryCov_9fa48("95"), {
  LengthConverter
});