const category = require("./../models/category.model");
const fs = require("fs");
exports.list = async (req,res)=>{
    try {
        const rs = await category.find();
        res.render("category/list",{categorys:rs});
    } catch (error) {
        
    }
}
exports.formCreate = (req,res)=>{
    const data = req.body;
    // console.log(req._parsedOriginalUrl.path)
    data.url = req._parsedOriginalUrl.path;
    res.render("category/form",{category:data});
}
exports.store = async (req,res)=>{
    const data = req.body;
    const file = req.file;
    // console.log(file);
    if(file){
        const img = fs.readFileSync(file.path);
        data.thumbnail = {
            contentType: file.mimetype,
            data:img.toString("base64")
        }
    }
    try {
        // data.thumbnail = `/uploads/${file.filename}`;
        const p = new category(data);
        await p.save();
        res.redirect("/category");
    } catch (error) {
        res.render("category/form",{category:data,error:error});
    }
}

exports.formEdit = async (req,res)=>{
    const _id = req.params.id;
    try {
        const category = await category.findById(_id);
        category.url = req._parsedOriginalUrl.path;
        res.render("category/form",{category:category});
    } catch (error) {
        res.redirect("/category");
    }
    
}

exports.update = async (req,res)=>{
    const _id = req.params.id;
    const data= req.body;
    const category = await category.findById(_id);
    try {
        const file = req.file;
        if(file){
            const img = fs.readFileSync(file.path);
            data.thumbnail = {
                contentType: file.mimetype,
                data:img.toString("base64")
            }
        }else{
            data.thumbnail = category.thumbnail;
        }
        await category.findByIdAndUpdate(_id,data);
        res.redirect("/category");
    } catch (error) {
        res.render("category/form",{category:category});
    }
}

exports.delete =  async (req,res)=>{
    const _id = req.params.id;
    try {
        await category.findByIdAndDelete(_id);
        res.redirect("/category");
    } catch (error) {
        res.redirect("/category");
    }
}