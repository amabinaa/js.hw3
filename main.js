//a
let Num = +prompt ("Введите число: ")
for(let i = 1; i <= Num;i++) {
  if(i == 1) {
    console.log(i + " banana");
  }else {
    console.log(i + " bananas");
  }
}


 //b
 let num = +prompt ("Введите число: ")
 let sum = 0;

for (let i =0; i<num; i++) {
    if (i%2==0) {
    sum = sum +i;
    }
}
console.log(sum);

 //c

 let n = +prompt("Введите число: ") 
 let s = +prompt("Введите степень: ")
 let res;
 if (s==isNaN || s==0) {
    s=2;
}
 while (!isNaN(n) && n !=0) {
    res = n**s;
    alert("Степень равна: " + res)
 }


 
