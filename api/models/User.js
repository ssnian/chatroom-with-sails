/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        loginName: {
            type: 'string',
            size: 32,
            required: true,
            unique: true,
        },
        
        nickName: {
            type: 'string',
            size: 128,
        },
        
        password: {
            type: 'string',
            size: 128,
        }
    }
};

