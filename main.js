import _ from 'lodash';



let arrayOfNumbers = [1,1,1,2,2,3,4,4,4,4,4,4,5,5,5,6,6,6,7,7,7,7,7,8,8,8,8,8,9,9,0,0,0,0,0,0,1];

let numCounts =_countBy(arrayOfNumbers);

document.getElementById("output").innerHTML = numCounts;