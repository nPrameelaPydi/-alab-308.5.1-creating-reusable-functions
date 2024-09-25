console.log(`ALab-308.5.1 Creating Reusable Functions`);

//**********Part 1************* */
console.log(`**********Part 1***************`)

//Take an array of numbers and return the sum.
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(`1. Sum of numbers in array: ${sum([4, 6, 5, 8])}`);

//Take an array of numbers and return the average.
function avg(arr) {
    return (sum(arr) / arr.length);
}
console.log(`2. Average of numbers in array: ${avg([4, 5, 6, 8])}`);

//Take an array of strings and return the longest string
function longestStr(arr) {
    let longestStr = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestStr.length) {
            longestStr = arr[i];
        }
    }
    return longestStr;
}
console.log(`3. Longest string in array: ${longestStr(['bruce', 'occupation', 'runner', 'bilbo'])}`);

//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
//For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
function stringsLongerThan(arr, num) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > num) {
            resultArr.push(arr[i]);
        }
    }
    return resultArr;
}
console.log(`4. Strings longer than given number: `)
console.log(stringsLongerThan(['bruce', 'occupation', 'runner', 'bilbo'], 5));
//console.log("4. Strings longer than given number: " + stringsLongerThan(['bruce', 'occupation', 'runner', 'bilbo'], 5));

//Take a number, n, and print every number between 1 and n without using loops. Use recursion.

