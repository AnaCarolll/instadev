

module.exports = (sequelize, DataTypes) => {
    let p =  sequelize.define(
        "Publicacoes",
        {
            id: {
                type:DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
              },
              texto: {
                type:DataTypes.STRING(120),
                allowNull: false,
              },
              usuarios_id: {
                type:DataTypes.INTEGER,
                allowNull: false,
               
              },
              imagem: {
                type:DataTypes.STRING(45),
                allowNull: true,
              }
            
        },
        {
          tableName:"publicacoes",
          timestamps:false
      }
    )
     return p;

}