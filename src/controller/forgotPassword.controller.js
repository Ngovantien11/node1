const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const mailer = require('../mails/gmail');

exports.showForgotForm = (req,res)=>{
    res.render('auth/password/email');
}

exports.sendResetLinkEmail = (req,res)=>{
    if(!req.body.email){
        res.redirect('/password/reset')
    } else {
        User.findByEmail(req.body/email)
    }
}