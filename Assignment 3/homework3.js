function exercise1(numList) {
  return _.reduce(numList, function (memo, num) {
    return memo + num;
  }, 0) / (numList.length === 0 ? 1 : numList.length);
}

function exercise2(numList) {
  return _.max(numList);
}

function exercise3(numList) {
  return _.some(numList, function (val) {
    return val % 2 === 0;
  });
}

function exercise4(numList) {
  return _.every(numList, function (val) {
    return val % 2 === 0;
  });
}

function arrayContains(stringArray, searchItem) {
  return _.contains(stringArray, searchItem);
}

function without_arrayContains(stringArray, searchItem) {
  if ((stringArray.indexOf(searchItem) > -1)) {
    return true;
  }
  else { return false; }
}

function without_exercise3(numList) {
  for (var i = 0; i < numList.length; i++) {
    if (numList[i] % 2 === 0) {
      return true;
    }
  }
  return false;
}

function without_exercise4(numList) {

  return numList.every(function (val) {
    return val % 2 === 0;
  });
}

function without_exercise1(numList) {
  var sum = 0;
  for (var i = 0; i < numList.length; i++) {
    sum += parseInt(numList[i], 10);
  }
  return sum / numList.length;
}

function without_exercise2(numList) {
  return Math.max.apply(Math, numList);
}
function without_arrayContainsTwo(stringArray, searchItem) {
  var counter = 0;
  for (var i = 0; i <= stringArray.length; i++) {
    if (stringArray[i] == searchItem) {
      counter++;
      if (counter >= 2) {
        return true;
      }
    }
  }
  return false;
}

function without_arrayContainsThree(stringArray, searchItem) {
  var counter = 0;
  for (var i = 0; i <= stringArray.length; i++) {
    if (stringArray[i] == searchItem) {
      counter++;
      if (counter >= 3) {
        return true;
      }
    }
  }
  return false;
}

function without_arrayContainsNTimes(stringArray, searchItem, count) {
  var counter = 0;
  for (var i = 0; i <= stringArray.length; i++) {
    if (stringArray[i] == searchItem) {
      counter++;
      if (counter >= count) {
        return true;
      }
    }
  }
  return false;
}

function arrayContainsTwo(stringArray, searchItem) {
  var list = _.filter(stringArray, function (val) {
    return val == searchItem;
  });
  if (_.size(list) >= 2) {
    return true;
  }
  else {
    return false;
  }
}
function arrayContainsThree(stringArray, searchItem) {
  var list = _.filter(stringArray, function (val) {
    return val == searchItem;
  });
  if (_.size(list) >= 3) {
    return true;
  }
  else {
    return false;
  }
}
function arrayContainsNTimes(stringArray, searchItem, count) {
  var list = _.filter(stringArray, function (val) {
    return val == searchItem;
  });
  if (_.size(list) >= count) {
    return true;
  }
  else {
    return false;
  }
}

(function () {
  document.getElementById("div1").innerHTML = exercise1([1, 2, 3, 4, 5]).toString();
  document.getElementById("div11").innerHTML = without_exercise1([1, 2, 3, 4, 5]).toString();
  document.getElementById("div2").innerHTML = exercise2([1, 2, 3, 4, 5]).toString();
  document.getElementById("div12").innerHTML = without_exercise2([1, 2, 3, 4, 5]).toString();
  document.getElementById("div3").innerHTML = exercise3([1, 2, 3, 4, 5]).toString();
  document.getElementById("div13").innerHTML = without_exercise3([1, 2, 3, 4, 5]).toString();
  document.getElementById("div4").innerHTML = exercise4([1, 2, 8, 10, 20]).toString();
  document.getElementById("div14").innerHTML = without_exercise4([1, 2, 3, 4, 50]).toString();
  document.getElementById("div5").innerHTML = arrayContains(["one", "two", "three", "four", "five"], "three").toString();
  document.getElementById("div15").innerHTML = without_arrayContains(["one", "two", "three", "four", "five"], "three").toString();
  document.getElementById("div6").innerHTML = arrayContainsTwo(["one", "two", "three", "three", "five"], "three").toString();
  document.getElementById("div16").innerHTML = without_arrayContainsTwo(["one", "two", "three", "three", "five"], "three").toString();
  document.getElementById("div7").innerHTML = arrayContainsThree(["one", "two", "three", "four", "five"], "three").toString();
  document.getElementById("div17").innerHTML = without_arrayContainsThree(["one", "two", "three", "four", "five"], "three").toString();
  document.getElementById("div8").innerHTML = arrayContainsNTimes(["one", "two", "three", "four", "five"], "three", 4).toString();
  document.getElementById("div18").innerHTML = without_arrayContainsNTimes(["one", "two", "three", "four", "five"], "three", 4).toString();
})();
