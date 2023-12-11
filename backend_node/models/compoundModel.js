function CompoundModel(sequelize, DataTypes){
    const Compound = sequelize.define("compound", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        compoundName: {
            type: DataTypes.TEXT
        },
        compoundDescription: {
            type: DataTypes.TEXT
        },
        imageSource: {
            type: DataTypes.TEXT
        },
        imageAttribution: {
            type: DataTypes.TEXT
        },
        dateModified: {
            type: DataTypes.DATE
        }
    },{
        timestamps: false
    });

    return Compound;
}

module.exports = CompoundModel;
