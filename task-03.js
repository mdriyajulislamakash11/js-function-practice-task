// Task-3
// Write a function called make_avg() which will take an array of integers
//  and the size of that array and return the average of those values.


const arr = [32, 42, 82, 53, 23,]

function make_avg(arr) {
      let total = 0;
      for(let i = 0; i < arr.length; i++){
            total = total + arr[i]
      }

      const avg_mark = total / arr.length;
      return avg_mark
      
}
const mark = make_avg(arr);

console.log(mark.toFixed(2));