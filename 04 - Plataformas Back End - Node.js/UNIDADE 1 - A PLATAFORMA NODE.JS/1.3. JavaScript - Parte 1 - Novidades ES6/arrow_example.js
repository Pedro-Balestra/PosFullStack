evens = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);
var pairs = evens.map(v => ({ even: v, odd: v + 1 }));

console.log(odds);
console.log(nums);
console.log(pairs);

fives = []

nums.forEach(v => {
    if(v%5 === 0) {
        fives.push(v);
    }
})
console.log(fives);