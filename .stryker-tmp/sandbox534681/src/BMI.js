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
function calculateBMI(heightInCM, weightInKG) {
  if (stryMutAct_9fa48("9")) {
    {}
  } else {
    stryCov_9fa48("9");
    if (stryMutAct_9fa48("12") ? (heightInCM === '' || heightInCM < 0) && isNaN(heightInCM) : stryMutAct_9fa48("11") ? false : stryMutAct_9fa48("10") ? true : (stryCov_9fa48("10", "11", "12"), (stryMutAct_9fa48("14") ? heightInCM === '' && heightInCM < 0 : stryMutAct_9fa48("13") ? false : (stryCov_9fa48("13", "14"), (stryMutAct_9fa48("16") ? heightInCM !== '' : stryMutAct_9fa48("15") ? false : (stryCov_9fa48("15", "16"), heightInCM === (stryMutAct_9fa48("17") ? "Stryker was here!" : (stryCov_9fa48("17"), '')))) || (stryMutAct_9fa48("20") ? heightInCM >= 0 : stryMutAct_9fa48("19") ? heightInCM <= 0 : stryMutAct_9fa48("18") ? false : (stryCov_9fa48("18", "19", "20"), heightInCM < 0)))) || isNaN(heightInCM))) {
      if (stryMutAct_9fa48("21")) {
        {}
      } else {
        stryCov_9fa48("21");
        return stryMutAct_9fa48("22") ? "" : (stryCov_9fa48("22"), "Please provide a valid height");
      }
    } else if (stryMutAct_9fa48("25") ? (weightInKG === '' || weightInKG < 0) && isNaN(weightInKG) : stryMutAct_9fa48("24") ? false : stryMutAct_9fa48("23") ? true : (stryCov_9fa48("23", "24", "25"), (stryMutAct_9fa48("27") ? weightInKG === '' && weightInKG < 0 : stryMutAct_9fa48("26") ? false : (stryCov_9fa48("26", "27"), (stryMutAct_9fa48("29") ? weightInKG !== '' : stryMutAct_9fa48("28") ? false : (stryCov_9fa48("28", "29"), weightInKG === (stryMutAct_9fa48("30") ? "Stryker was here!" : (stryCov_9fa48("30"), '')))) || (stryMutAct_9fa48("33") ? weightInKG >= 0 : stryMutAct_9fa48("32") ? weightInKG <= 0 : stryMutAct_9fa48("31") ? false : (stryCov_9fa48("31", "32", "33"), weightInKG < 0)))) || isNaN(weightInKG))) {
      if (stryMutAct_9fa48("34")) {
        {}
      } else {
        stryCov_9fa48("34");
        return stryMutAct_9fa48("35") ? "" : (stryCov_9fa48("35"), "Please provide a valid weight");
      }
    } else {
      if (stryMutAct_9fa48("36")) {
        {}
      } else {
        stryCov_9fa48("36");
        return (stryMutAct_9fa48("37") ? weightInKG * (heightInCM * heightInCM / 10000) : (stryCov_9fa48("37"), weightInKG / (stryMutAct_9fa48("38") ? heightInCM * heightInCM * 10000 : (stryCov_9fa48("38"), (stryMutAct_9fa48("39") ? heightInCM / heightInCM : (stryCov_9fa48("39"), heightInCM * heightInCM)) / 10000)))).toFixed(2);
      }
    }
  }
}
console.log(calculateBMI(180, 60));
module.exports = stryMutAct_9fa48("40") ? {} : (stryCov_9fa48("40"), {
  calculateBMI
});

// export default calculateBMI