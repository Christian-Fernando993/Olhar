export default function initarmazenarDados() {

    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;

    const btn = document.querySelector('.send');
    
    btn.addEventListener("click", function(e) {
        // e.preventDefault();

        var nome = document.getElementById('nome');
        var telefone = document.getElementById('telefone');
        var email = document.getElementById('email');

        var valueNome = nome.value;
        var valueTelefone = telefone.value;
        var valueEmail = email.value;

        console.log(valueNome);
        console.log(valueTelefone);
        console.log(valueEmail);
    })
}




