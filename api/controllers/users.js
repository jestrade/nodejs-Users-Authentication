"use strict";

const User = require("./../models/users");
const config = require("./../../config");

exports.all = (req, res, next) => {
            User.find()
            .then( users => {
                res.json(users);
            })
            .catch( err => {
                next(new Error(err));
            });      
};


exports.post = (req, res, next) => {
};

exports.get = (req, res, next) => {
};


exports.logout = (req, res, next) => { 
    
    
};

exports.login = (req, res, next) => { 
};

exports.put = (req, res, next) => {
    
};

exports.delete = (req, res, next) => { 
};