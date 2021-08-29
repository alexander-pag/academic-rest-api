/** packages */
const CryptoJS = require("crypto-js");
const config = require("config");
const jwt = require("jsonwebtoken")

/** Encrypt password */
exports.EncryptPassword = (password) => {
    let secretKey = config.get("secretkeys").cryptojs;
    let encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
    return encryptedPassword;
};

// Decrypt
exports.DecryptPassword = (cryptedPassword) => {
    let secretKey = config.get("secretkeys").cryptojs;
    let bytes = CryptoJS.AES.decrypt(cryptedPassword, secretKey);
    let originalPassword = bytes.toString(CryptoJS.enc.Utf8);
    return originalPassword
}

exports.GenerateTokenPass = (user) => {
    let secretKey = config.get("secretkeys").jwt;
    let token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + config.get("sessionTime"),
        data: {
            username: user.username,
            user_id: user._id,
            user_rol: user.role
        }
      }, secretKey);
    return token;
}