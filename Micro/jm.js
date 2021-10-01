function bonAppetit(bill, k, b) {
    let fairBillAmount = 0;
    for(let i=0; i < bill.length; i++){
        if(i !==k) {
            fairBillAmount += bill[i]/2;
        }
    }
    if (fairBillAmount === b) {
        return "Bon appetit";
    }
    return b-fairBillAmount;
}
console.log(bonAppetit([2,4,6], 2,15));