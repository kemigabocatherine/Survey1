function sockMerchant(n, ar) {
    var res = 0;
        ar.sort();
        for(let i=0; i<n;i++){
            if(ar[i] == ar[i+1]){
                i++;
                      res++;
               }
        }
    return res;
}
console.log(sockMerchant(8,[10,20,20,10,10,30,50,10]));