// const { dadosQuiz } = require("../controllers/usuarioController");
const database = require("../database/config");

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n\n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha);
    var instrucaoSql = `
    SELECT id, nome, email as usuarioId FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha, genero) {
    console.log("ACESSEI O USUARIO MODEL \n\n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, genero);
    
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha, genero) VALUES ('${nome}', '${email}', '${senha}', '${genero}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function quiz(questoes, idusuario) {
    console.log("ACESSEI O USUARIO MODEL \n\n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", questoes);

    var instrucaoSql = `
        INSERT INTO resultado (fkusuario, fkquiz, data, acertos) VALUES ( '${idusuario}', 10, NOW(), '${questoes}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function dadosGenero() {
    console.log("ACESSEI O USUARIO MODEL \n\n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function dadosGenero():");

    var instrucaoSql = `
        SELECT genero, COUNT(*) AS quantidade 
        FROM usuario 
        GROUP BY genero;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

    function dadosQuiz(idusuario) {
        console.log("ACESSEI O USUARIO MODEL \n\n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function dadosQuiz():");

        var instrucaoSql = `
        SELECT acertos 
        FROM resultado 
        WHERE fkusuario = '${idusuario}' 
        ORDER BY data DESC 
        LIMIT 1;        
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

   
module.exports = {
    autenticar,
    cadastrar,
    quiz,
    dadosGenero,
    dadosQuiz,
    
};
