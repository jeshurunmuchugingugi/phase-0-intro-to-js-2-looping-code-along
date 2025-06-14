// Code your solutions in this file


function writeCards(names, eventName) {
    let messages = [];
    
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
  
    return messages;
  }
  writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");


function countDown(startingNumber) {
    while (startingNumber >= 0) {
      console.log(startingNumber);
      startingNumber--;
    }
  }
  
  countDown(10);