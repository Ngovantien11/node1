const User = require("./../models/")
exports.register = (req,res)=>{
    res.render("register");
}
exports.postRegister = async(req,res)=>{
    const data = req.body;
    // res.send(data);
    const salt =  await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(data.password.salt);
    data.password = hashed;
    const u = new User(data);
    await u.save();
    res.send("DONE");
}
