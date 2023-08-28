const nodemailer = require("nodemailer")
const config = {
    service:"Gmail",
    host:"smtp.gmail.com",
    port: 587,
    auth: {
        user:"tiennvth2207012@fpt.edu.vn",
        pass:"rgmjeinoyecijxup"
    }
}
const transport = nodemailer.createTransport(config);
module.exports = transport;