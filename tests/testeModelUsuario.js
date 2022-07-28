const {Usuario} =  require('../database/models');

let teste = async() => {
    let usuarios = await Usuario.findAll();
    console.log(usuarios);
}
teste();

