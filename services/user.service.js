const User = require('../model/user.model');

class UserServices {
    async addNewUser(body) {
        return await User.create(body);
    }
    async findUsers(body) {
        try {
            return await User.find(body);
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    async findOneUser(body) {
        return await User.findOne(body);
    }
};

module.exports = new UserServices;

