module.exports = (sequelize, DataTypes) => {
    // mysql에는 users 테이블이 생성
    const User = sequelize.define('User',{
        email: {
            type: DataTypes.STRING(30),
            allowNull:false,
            unique: true
        },
        nickname: {
            type: DataTypes.STRING(30),
            allowNull:false
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull:false
        }
    },{
        charset : 'utf8',
        collate: 'utf8_general_ci'
    })
    User.associate = (db) => {
        // 사람이 포스트를 여러개 가질 수 있다. 
        db.User.hasMany(db.Post)
        db.User.hasMany(db.Comment)
        db.User.belongsToMany(db.Post, {through : 'Like', as: "Liked"})
        db.User.belongsToMany(db.Post, {through : 'Follow', as: "Followers", foreignKey: "FollowingId"})
        db.User.belongsToMany(db.Post, {through : 'Follow', as: "Followings", foreignKey: "FollowerId"})
    }
    return User;
}