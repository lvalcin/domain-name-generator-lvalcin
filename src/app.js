import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// console.log("Any string");
window.onload = function() {
  let pronoun =['the','our','his', 'her'];
  let adjective =['great','big','amazing','fancy'];
  let noun = ['recipe','horse','dog','car'];
  let extension = ['.com', '.net', '.us', '.io'];
  
  let domainName = [...pronoun,...adjective,...noun];
  
  for(let i=0;i<pronoun.length;i++){
    for(let a=0; a<adjective.length;a++){
      for(let n=0; b<noun.length; n++){
        for(let e=0; 0<extension.length; e++){
          
          let domainName = pronoun[i] = adjective[a] + noun[n] + extension[e];
        }
      }
    }
    
  }
}
console.log(domainName);
