const form = document.getElementById('formulario');

form.addEventListener('submit', function (event){

    event.preventDefault();

    let valido =true;
        let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let peso = document.getElementById('peso').value;
    let tipo = document.getElementById('sangue').value;
    let idade = document.getElementById('idade').value;
    let estado = document.getElementById('estado').value;
    let cidade = document.getElementById('cidade').value;

    let doadores = [];
    let doador = {
        nome,
        email,
        telefone,
        peso,
        tipo,
        idade,
        estado,
        cidade,
}

    if (nome.split(" ").length < 2) {
        alert("Insira nome e sobrenome");
        valido = false;
    }

    if (nome.length < 3) {
        alert("seu nome deve ter no minimo 3 caracteres");
        valido = false;
    }

    if(!email.includes('@')){
        alert("Email inválido");
    }

        if (idade < 16) {
        alert("Você precisa ser maior de 16 anos");
        valido = false;
    }

        if (peso < 50){
        alert("É preciso ter no minimo 50 KG's");
        valido = false;
    }

        if (!/^\d+$/.test(telefone)) {
        alert("O telefone deve conter apenas numeros");
        valido = false;
}
        if (!nome || !email || !idade || !peso || !telefone || !cidade || !estado) {
        alert("Insira todas as informações");
        valido = false
    }

if (valido) {
        let resultado = document.getElementById('resultado');

        resultado.innerHTML = `
        Dados enviados: <br>
        Nome: ${nome} <br> 
        Email: ${email} <br> 
        Telefone: ${telefone} <br>
        Peso: ${peso} <br>
        Tipo: ${tipo} <br>
        Estado: ${estado} <br>
        Idade: ${idade} <br>
        Cidade: ${cidade} <br>
        `;

        doadores.push(doador);
        console.log(doadores);

        document.getElementById('nome').value = "";
        document.getElementById('email').value = "";
        document.getElementById('telefone').value = "";
        document.getElementById('peso').value = "";
        document.getElementById('sangue').value = "";
        document.getElementById('idade').value = "";
        document.getElementById('estado').value = "";
        document.getElementById('cidade').value = "";
    }
});