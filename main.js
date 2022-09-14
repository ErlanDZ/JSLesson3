
function calcSumm(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        if( num1 < num2){
            console.log("Первый аргумент меньше второго");
         } else{
            console.log("Второй аргумент меньше первого");
         }
    } else{
        console.log("НЕ является числом");
     }
}

//calcSumm(20,40)

 let arr1 = [22,44]
    let arr2 = [55,55,55,44]
function sum(arr1, arr2) {    
   
    if (arr1.length < arr2.length) {
       console.log("Первый массив меньше второго"); 
    }else if(arr1.length > arr2.length){
        console.log("Второй массив меньше первого");
    }
  }

   //sum(arr1, arr2)

   function  countChar(params) {
    let length = params.length;
    console.log(length);
   }

   countChar("Hello word!!!")



