let num: number = 12;
let total: number = 0;
//
// function  fibonaccy(num: number): number {
// if (num <= 1){
//     return num;
// }else {
//     return fibonaccy(num -1)+ fibonaccy(num -2);
// }
//
// }
// document.write("Fibonaccy: "+num);
// for (let i = 0; i <num ; i++) {
//     total += num[i];
// }
// document.write("Tổng :" + total);
function fibonanci(num: number): number {
    if (num <= 1) {
        return num;
    }
    return fibonanci(num - 1) + fibonanci(num - 2);
}


console.log("Fibonacci: " + num);
for (let i = 0; i < num; i++) {
    console.log(String(fibonanci(i)));
    total += fibonanci(i);
    // document.writeln();
}

console.log("Tổng: " + total);

