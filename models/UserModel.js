const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        username: {
            type: DataTypes.STRING,
            unique: {
                args: [true],
                msg: 'This username is taken.'
            },
            allowNull: true,
            validate: {
                is: {
                    args: ["^[a-zA-Z0-9]+$"],
                    msg: "Usernames can only contain letters and numbers."
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            roles: false,
            validate: {
                len: {
                    args: 6,
                    msg: "Password must be longer than 6 characters."
                }
            }
        }
    }, {
        timestamps: false,
        classMethods: {
            associate: function(models) {
                //Model relationships
            },
            doLogin: function(username, password, opts) {
                var denied = "Username or Password was wrong. Please try again.";
                var user;

                return User.findOne({
                        where: {
                            username: username
                        }
                    })
                    .then(function(u) {
                        user = u;

                        if (!user)
                            throw denied;

                        return user.checkPassword(password);
                    })
                    .then(function(result) {
                        if (!result)
                            throw denied;

                        return user;
                    });
            }
        },
        instanceMethods: {
            checkPassword: function(candidatePassword) {
                var user = this;

                return new Promise(function(resolve, reject) {
                    bcrypt.compare(candidatePassword, user.password, function(err, isMatch) {
                        if (err)
                            return reject(err);

                        resolve(isMatch);
                    });
                });
            }
        }
    });

    var hashPasswordHook = function(instance) {
        return new Promise(function(resolve, reject) {
            if (!instance.changed('password'))
                return reject();

            bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
                if (err)
                    return reject(err);

                bcrypt.hash(instance.get('password'), salt, function(err, hash) {
                    if (err)
                        return reject(err);

                    instance.set('password', hash);
                    resolve();
                });
            });
        });
    };

    User.beforeCreate(hashPasswordHook);
    User.beforeUpdate(hashPasswordHook);

    return User;
}