const email = usuario.email;
const senha = usuario.senha;

function vereficarCredencias() {
    const emailInformado = document.getElementById("email").Value;
    const senhaInformada = document.getElementById("senha").Value;

    if(emailInformado === email) {
        //alert("e-mail informado corretamente!");
        if(senhaInformada === senha) {
            //alert("Senha informada corretamente");
            window.location = "home.html";
        }
        else
        alert("senha "  + senha + " informada incorretamente!");
    } else
        alert("e-mail informado incorretamente!");
}

