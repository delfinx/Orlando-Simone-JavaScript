//esercizio 1
function controllaNumero(num) {
    console.log(num); 
    
    if(num % 2 === 0) {
      console.log("Numero pari: " + num);
    } 
    else {
      console.log("Numero dispari: " + num);
    }
  
    if(num > 100) {
      alert("Grande!");
    }
  }
  
  
  controllaNumero(101);

//esercizio 2
    let i = 10;

    while(i >= 0) {
    console.log(i);

    if(i === 0) {
        alert("BOOM!");
    }

        i--; 
    }

    //esercizio 3
    let numeri = [3, 6, 1, 9];

    numeri.push(5);

    numeri.sort((a, b) => a - b);

    console.log("Il primo elemento è: ", numeri[0]);
    console.log("L'ultimo elemento è: ", numeri[numeri.length - 1]);

   
      