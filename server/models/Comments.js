module.exports = (sequelize, DataTypes) => {

    // Define table = Comments
    const Comments = sequelize.define("Comments", {
        commentBody: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    return Comments;
}