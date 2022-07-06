let nome = document.getElementById('nome')
let tel = document.getElementById('tel')
let email = document.getElementById('email')
let empresa = document.getElementById('empresa')

empresaConfirm = false
nomeConfirm = false
telConfirm = false

function verificaNome(){
    if(nome.value.length < 3){
        alert('Insira um nome com no minimo 3 letras')
    }else{
        nomeConfirm = true
    }
}

    function verificaTel(){
        if(tel.value.length < 10){
            alert('Insira um telefone válido')
        }else{
            telConfirm = true
        }
    }

    function verificaEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
      }

    function verificaEmpresa(){
        if(empresa.value.length<2){
            alert('Digite um nome correto para empresa')
        }else{
            empresaConfirm = true
        }
    }

function cadastrar(){
    verificaNome(),verificaTel(),verificaEmail(),verificaEmpresa()
}
    