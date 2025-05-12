function controllaNumero(num) {
    console.log(num); 
  
    if (num % 2 === 0) {
      console.log("Numero pari: " + num);
    } 
    else {
      console.log("Numero dispari: " + num);
    }
  
    if (num > 100) {
      alert("Grande!");
    }
  }
  
  
  controllaNumero(101);
  