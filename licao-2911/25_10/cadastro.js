function cadastrar(event) {

    event.preventDefault();

    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    var email = document.getElementById("email").value;

    //samuel.mattos - 12345 - seila.man@gmail.com

    if (usuario === "samuel.mattos" && senha === "12345" && email === "seila.man@gmail.com") {

        Swal.fire({
            title: 'Cadastro Realizado',
            text: 'Bem vindo',
            icon: 'success',
            confirmButtontext: 'OK'
        }).then(() => {
            setTimeout(() => {
                location.href = "../tela-login/index.html"
            }, 100);
        });

    } else {
        alert("Usuário ou senha inválidos.");
    }

}
