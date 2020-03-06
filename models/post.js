module.exports = function(sequelize, DataTypes) {
 const Post = sequelize.define("User", {
     name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1,30]
        }
     },
     quote: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            notEmpty: true,
            len: [1,140]
         }
     },
     birthdate: {
         type: DataTypes.INTEGER,
         allowNull: false,
         validate: {
            notEmpty: true,
            len: [4,4]
         }
     },
     deathdate: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
           notEmpty: true,
           len: [4,4]
        }
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isUrl: true
        }
    },
    category: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true
        }
    }
 });
    Post.associate = function(models) {
        postMessage.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Post;
};