(  
  function(numArray){
     numArray = numArray.filter((number) => {
       for (var i = 2; i <= Math.sqrt(number); i++) {
         if (number % i === 0) return false;
       }
       return true;
     });
     console.log(numArray);
 })([1,2,3,4])

let primeNumber=function(primeNumber1)
{
     primeNumber1 = primeNumber1.filter((number) => {
       for (var i = 2; i <= Math.sqrt(number); i++)
        {
         if (number % i === 0) return false;
       }
       return true;
     });
  console.log(primeNumber1);
    }
    primeNumber([1,2,3,4,5])
     
