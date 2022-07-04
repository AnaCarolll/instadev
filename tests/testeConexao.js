// importa o sequelize 
const sequelize = require('sequelize');
// Elencar os dados para conexao com o BD(essa é a estrutura para a criacao de um objeto)

const config = {
    username:"root",
    password:"",
    host:"localhost",
    port:3306,
    dialect:"mysql",
    database:"osmaker"
};
// Criar conexao com o banco
const conexao = new sequelize (config);
// realizar uma consulta
let resultado = conexao.query("select * FROM funcionarios ");
let promessa2 = conexao.query("SELECT * FROM oss LIMIT 0,1");
let promessa3 = conexao.query("SELECT * FROM bairros LIMIT 0,2");

promessa1
.then(
    (dados)=>{
        console.log(dados)
        conexao.close();
    }
).catch(
    err => console.log(err)
)

promessa2.then(
    ()=>{
        console.log("Óia!")
        conexao.close();
    }
)

promessa3.then(
    (dados)=>{
        console.log("Peguei o primeiro bairro!")
        conexao.close();
    }
)










//console.log(resultado);