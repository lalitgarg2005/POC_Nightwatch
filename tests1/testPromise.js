function getSum(n1, n2){
    var isNegative = function(){
        return n1 < 0 || n2 < 0;
    }

    var promise = new Promise(function(resolve, reject){
        if(isNegative()){
            reject(Error("No Negatives Allowed"));
        }
        resolve(n1 + n2);
    });
    return promise;
}

getSum(4, 2)
.then(function(result){
    console.log(result);
    return getSum(10,-20);
},function(error){
    console.log(error);
})
.then(function(result){
    console.log("Sum =" + result);
    return getSum(30, 40);
},function(error){
    console.log("Error 1 = " + error);
    return getSum(30, 40);

})
.then(function (result){
    console.log("Sum 2 = " + result);
}, function(error){
    console.log(" Error 2 = " + error);
})