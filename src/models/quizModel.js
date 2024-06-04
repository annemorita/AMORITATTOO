var database = require("../database/config");

function listarTipo() {
    var instrucaoSql = `SELECT * FROM tipo`;

    return database.executar(instrucaoSql);
}

function listarEstilo() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT *
        FROM estilo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarLocalCorpo() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT *
        FROM local_do_corpo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(idlocal, idestilo, idtipo, idusuario) {

    var instrucaoSql = `
    INSERT INTO tatuagem values 
    (default,'${idestilo}', '${idlocal}', '${idtipo}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    var resultadoTatuagem = database.executar(instrucaoSql);

    var idTatuagem = resultadoTatuagem.insertId;

    var instrucaoSql2 = `
    INSERT INTO quiz values 
    (default,'${idusuario}', '${idTatuagem}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql2);
    return database.executar(instrucaoSql2);
    
}

module.exports = {
    listarTipo,
    listarEstilo,
    listarLocalCorpo,
    cadastrar
}
