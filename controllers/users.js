const { execute } = require("../lib/mysql");

exports.getUser =  async (req, res, next) => {
    await execute("select * from users").then(result => {
        console.log(result)
        res.status(200).json({
            status:200,
            result
        })
    })
    
}

exports.createUser = async (req, res, next) => {
    console.log("body",req.body);
    const { firstName, lastName, email, password} = req.body;
    const user = {
        firstname:firstName,
        lastname:lastName,
        email:email,
        password:password
    }
    await execute("INSERT INTO users SET ?",user).then(result => {
        console.log(result)
        res.status(200).json({
            status:200,
            result
        })
    })
}