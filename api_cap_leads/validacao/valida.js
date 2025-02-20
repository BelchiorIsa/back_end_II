 export function validaUsuario(nome, email, telefone) {
     console.log('Validando dados:', { nome, email, telefone });

     if (!nome || !email || !telefone) {
         console.log('Dados incompletos.');
         return false;
     }

     if (!validarEmail(email)) {
         console.log('Email inválido.');
         return false;
     }

     if (!validarTelefone(telefone)) {
         console.log('Telefone inválido.');
         return false;
     }

     console.log('Dados válidos.');
     return true;
}

 function validarEmail(email) {
     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return regex.test(email);
 }

 function validarTelefone(telefone) {
     const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
     return regex.test(telefone);
};

//testa se o parametro esta de acordo, se atende (true, false)
// function validaUsuario(nome){
//     const regexNome = /^[a-zA-zÀ-ÿ\s\-']+$/;
//     const isvalid = nome.length >= 2 && regexNome.test (nome);
//     return isvalid;

// }
