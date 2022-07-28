const brypt = require('bcrypt');


const usuarios = [
    {
      id: 1,
      nome: "Nat Flix Cardoso da Silva",
      email: "nat@netflix.com",
      senha: brypt.hashSync("123456",10),
      foto: "nat.jpg"

  },
  {
    id:2,
    nome:"anonimato",
    email:"anonimo@gmail.com",
    senha:brypt.hashSync("123456",10),
    foto:"anonimo.jpg"
  },
  {
    id:3,
    nome: "fulano",
    email:"fulano@gmail.com",
    senha:brypt.hashSync("123456",10),
    foto:"fulano.jpg",
  }

]
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', usuarios,{});
   
  },

  async down (queryInterface, Sequelize) {
 
     await queryInterface.bulkDelete('usuarios', null, {});
     
  }
};
