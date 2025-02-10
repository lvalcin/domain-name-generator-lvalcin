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
  
  let domainName = document.getElementById("domain");
  let domain = [];
  
  
  for(let i=0;i<pronoun.length;i++){
    for(let a=0; a<adjective.length;a++){
      for(let n=0; n<noun.length; n++){
        for(let e=0; e<extension.length; e++){
          
          let domainGenerator = pronoun[i] + adjective[a] + noun[n] + extension[e];
          domain.push(domainGenerator);
        }
      }
    }
    
  }
  console.log(domain);
  domainName.innerHTML = domain.join('<br>');
}
