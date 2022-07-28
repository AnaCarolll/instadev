

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
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
                references: {
                  model:{
                    tableName: "Publicacoes"
                  },
                  key:"id"
                }
              },
              imagem: {
                type:DataTypes.STRING(45),
                allowNull: true,
              }
            
        },
        {
          tablename:"Usuarios",
          timestamps:false
      }
    )
}