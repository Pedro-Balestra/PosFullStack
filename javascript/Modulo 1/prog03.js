let n = +"12";
console.log(1, n, typeof n);

let n1 = 12+"";
console.log(2, n1, typeof n1);

let a = 3;
// console.log(3, --a*2, a);
// console.log(3, a--*2, a);
console.log(3, ++a*2, a);
// console.log(3, a++*2, a);

let nome = "Pedro";
if(nome){
    console.log(4, nome);
} else {
    console.log(4, "Nome vazio");
}