function fiboEvenSum(n) {
    function fibo(x){
      if(x === 1){
        return 1
      }
      if(x === 2){
        return 2
      }
      return fibo(x - 2) + fibo(x - 1)
    }
  
    let sum = 0
    let i = 1
  
    while(fibo(i) < n){
      if(fibo(i) % 2 === 0){
        sum += fibo(i)
      }
      i++
    }
  
    return sum
  }
  
  fiboEvenSum(10);
  