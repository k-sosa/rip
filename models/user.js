module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isAlphanumeric: true,
                notEmpty: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isAlphanumeric: true,
                len: [8,20]
            }
        }
    });
    // User.associate = function(models) {
    //     User.hasMany(models.Post, {
    //         onDelete: "cascade"
    //     });
    // };
    return User;
};