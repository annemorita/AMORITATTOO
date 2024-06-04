var quizModel = require("../models/quizModel");

function listarTipo(req, res) {
    quizModel.listarTipo().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarLocalCorpo(req, res) {
    quizModel.listarLocalCorpo().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarEstilo(req, res) {
    quizModel.listarEstilo().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrar(req, res) {

    var tipo = req.body.tipoServer;
    var estilo = req.body.estiloServer;
    var local = req.body.localServer;

    // var usuario = req.body.usuario; TODO REVER

    if (tipo == undefined) {
        res.status(400).send("Seu tipo está undefined!");
    } else if (estilo == undefined) {
        res.status(400).send("Seu estilo está undefined!");
    } else if (local == undefined) {
        res.status(400).send("Sua local está undefined!");
    } else if (usuario == undefined) {
        res.status(400).send("Sua usuario está undefined!");
    } else {

        quizModel.cadastrar(local, estilo, tipo, usuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    listarTipo,
    listarEstilo,
    listarLocalCorpo,
    cadastrar
}