function logar(event) {

    event.preventDefault();

    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    //samuel.mattos - 12345 

    if (usuario === "samuel.mattos" && senha === "12345") {

        Swal.fire({
            title: 'Login Realizado',
            text: 'Bem vindo',
            icon: 'success',
            confirmButtontext: 'OK'
        }).then(() => {
            setTimeout(() => {
                location.href = "../01_11/pagina.html";
            }, 100);
        });

    } else {
        alert("Usuário ou senha inválidos.");
    }

}
