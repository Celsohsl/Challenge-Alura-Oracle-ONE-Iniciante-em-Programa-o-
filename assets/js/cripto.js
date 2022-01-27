let btnCrypto = document.querySelector(".btn-crypto");
  btnCrypto.addEventListener("click", function(event){
    event.preventDefault();

    let textArea = document.querySelector(".text-area").value; 
    let textoCrypto = textArea.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    
    let textoResultado = document.querySelector(".text-crypto");
    textoResultado.value = textoCrypto;
    
});


const textArea = document.querySelector("textarea");
textArea.addEventListener("keypress", function(e){
  checkChar(e);

  if(!checkChar(e)){
    e.preventDefault();
  }

});

function checkChar(e) {
  const char = String.fromCharCode(e.keyCode);
  const pattern = "[a-z ]";

  if(char.match(pattern)) {
    return true;
  }

}

let btnDecrypto = document.querySelector(".btn-decrypto");
  btnDecrypto.addEventListener("click", function(e){
    e.preventDefault();

    let textArea = document.querySelector(".text-area").value;
    let textoCrypto = textArea.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    let textoResultado = document.querySelector(".text-crypto");
    textoResultado.value = textoCrypto;

});


let btnCopy = document.querySelector(".btn-copy");
  btnCopy.addEventListener('click', function() {

    let cryptoArea = document.querySelector(".text-crypto");
    cryptoArea.select();
    cryptoArea.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(cryptoArea.value);
    cryptoArea.value="";  

});


let btnClear = document.querySelector(".btn-clear");
  btnClear.addEventListener("click", function(){

    document.querySelector(".text-crypto",).value = "";
    document.querySelector(".text-area",).value = "";

});






 






