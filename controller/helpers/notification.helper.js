exports.sendSMS = async (phone) => {
    let code = random(111111, 999999);
    console.log(`Sending SMS with code "${code}" to phone number ${phone}`);

}

function random(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}
