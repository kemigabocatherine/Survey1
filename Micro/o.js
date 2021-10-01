function findDigits(n) {
    // Write your code here
let t = 0 ;
let k = n.toString();
let m = k.split('');
for(let i=0; i<=m.length; i++){
    if(n%m[i]==0){
         t++;
    }
}
return t;

}
console.log(findDigits(124));
