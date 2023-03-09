function HandlePWChange(password) {
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&+=])(?=.{8,}).*$/.test(password) == false)
    {
        return "Password needs to be at least 8 in length, one number, one upper case, one lower case and one special character";
    }
    else {
        return "";
    }
}
module.exports = HandlePWChange;