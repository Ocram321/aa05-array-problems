const findMinimum = arr => {

  let minIndex = 0;

  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }
  return arr[minIndex];
};

const runningSum = arr => {
  let total = 0 

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
    arr[i] = total;
  }

  return arr
  
};

const evenNumOfChars = arr => {

  const evenArr = arr.filter((word) => word.length % 2 === 0)
  return evenArr.length;
};

const smallerThanCurr = arr => {
  let countArr = [];


  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count++;
      }
    }
    countArr.push(count)
  }
  return countArr;

};

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
};

const secondLargest = arr => {

  arr.sort((a, b) => a - b)
  return arr[arr.length - 2]
};

const shuffle = (arr) => {
  let newArr = [...arr];

  for (let i = 0; i < arr.length; i++) {
    let randomNum = Math.floor(Math.random() * arr.length);
  
    let randomItem = newArr.splice(randomNum, 1);
    
    newArr.push(...randomItem);
  }
  return newArr;
    
  
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
