function bonAppetit(bill,k,b){
    let fairBill=0;
    for(let i=0;i<bill.length;i++){
        if(i!==k){
            fairBill+=bill[i]/2;
        }if(fairbill=b){
            return "Bon Appetit";
        }else {
            return b-fairBill;
        }
    }
}
console.log(bonAppetit([2,4,6],6,15));