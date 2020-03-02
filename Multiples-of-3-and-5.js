function multiplesOf3and5(number) {
    let output = 0
    for(let i = 0; i < number; i++){
      if(i % 3 === 0 || i % 5 === 0){
        output += i
      }
    }
    return output
  }
  
  multiplesOf3and5(1000);
  