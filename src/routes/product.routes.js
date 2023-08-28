const express = require("express");
const router = express.Router();
const controller = require("./../controller/product.controler");
//ai cung vao duoc trang danh sach-xem
//them moi-update-xoa chi admin
const middleware = require("./../middleware/role.middleware");
router.use("/create",middleware.role_admin);
router.use("/edit/:id",middleware.role_admin);
router.use("/delete",middleware.role_admin);


// upload file
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req,file,callback)=>{
        if(file)
            callback(null,"public/uploads");
    },
    filename: (req,file,callback)=>{
        if(file)
            callback(null,Date.now()+"-"+file.originalname);
    }
});
const upload = multer({storage:storage});

router.get("/",controller.list);
router.get("/create",controller.formCreate);
router.post("/create",upload.single("thumbnail"),controller.store);
router.get("/edit/:id",controller.formEdit);
router.post("/edit/:id",upload.single("thumbnail"),controller.update);
router.get("/delete/:id",controller.delete);

module.exports = router;
