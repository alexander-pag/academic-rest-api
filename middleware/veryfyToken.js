/** packages */
const jwt = require("jsonwebtoken")
const config = require("config")

module.exports = (req, res, next) => {
    let token = req.headers["access-token"];
    if (token) {
        let secretKey = config.get("secretkeys").jwt;
        let tokenDecoded = jwt.verify(token, secretKey);
        let currentDate = Math.floor(Date.now() / 1000);
        if (tokenDecoded.exp >= currentDate) {
            next();
        } else {
            return res.status(400).json({
                mess: "This token is not valid"
            });
        }
    } else {
        return res.status(400).json({
            mess: "Not access token set."
        })
    }
}