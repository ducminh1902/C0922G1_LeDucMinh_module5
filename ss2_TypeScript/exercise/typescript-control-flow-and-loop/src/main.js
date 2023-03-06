var sum = 0;
var count = 0;
for (var i = 2; count < 30; i++) {
    var isPrime = true;
    if (i == 2) {
        sum += i;
        count++;
        continue;
    }
    for (var j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (!isPrime) {
        continue;
    }
    sum += i;
    count++;
}
// console.log(`kết quả là: ${sum}`);
console.log("k\u1EBFt qu\u1EA3 l\u00E0: ".concat(sum));
