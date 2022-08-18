module.exports = (sequelize, DataTypes) => {
    // mysql에는 users 테이블이 생성
    const Comment = sequelize.define('Comment',{
        content: {
            type: DataTypes.TEXT,
            allowNull:false
        },
    },{
        charset : 'utf8',
        collate: 'utf8_general_ci'
    })
    Comment.associate = (db) => {
        db.Comment.belongsTo(db.User)
        db.Comment.belongsTo(db.Post)
    }
    return Comment;
}