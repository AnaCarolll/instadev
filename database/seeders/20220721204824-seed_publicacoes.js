
const publicacoes = [
  {
    id:1,
    usuarios_id:1,
    texto:"Penso logo existo",
    imagem:"penso.jpg",
    

  },
  {
    id: 2,
    usuarios_id:2,
    texto:"A maquina nao pensa , quem pensa é o dev, ela apenas executa os passos pesados e comandados a ela",
    imagem:"maquina.jpg",
   
  },
  {
    id: 3,
    usuarios_id:3,
    texto:"gato jagando bola",
    imagem:"gato.jpg",
   
  },
  {
    id: 4,
    usuarios_id:3,
    texto:"Alguem tomando sorverte",
    imagem:"sorvete.jpg",
    
  },
  {
    id: 5,
    usuarios_id:1,
    texto:"ele manja",
    imagem:"manja.jpg",
    
  },
  {
    id: 6,
    usuarios_id: 1,
    texto:"feliz aniversario",
    imagem:"bolo,jpg",
   
  }
]





module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('publicacoes', publicacoes,{});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('publicacoes', null, {});
    
  }
};
