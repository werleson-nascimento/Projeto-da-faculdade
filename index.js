const metade2 = document.getElementById('metade2');
const email = document.getElementById('email');
const senha = document.getElementById("senha");
const div = document.querySelectorAll('.respostaemail');


function emailValidate(){
    var  testeemail = document.getElementById('email').value;
    var testesenha = document.getElementById('senha').value;
    if(testeemail  == ""){
        alert('Digite um Email válido'); 
    }
    if(testesenha == ""){
        alert('Digite uma Seha válida');
     
    }
    
    else {
        window.location.href = "index.html"
    }
    
};