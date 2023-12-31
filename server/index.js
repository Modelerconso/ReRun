const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2/promise')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(cors())

let conn = null

// function connect database in phpmyadmin
const connectMySQL = async() => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'rerun',
        port: 8889
    })    
}

// Manager data register user.
// Check login in database.
app.post("/user/login", async (req,res) => {

    try{
        let usernameLogin = req.body.username
        let passwordLogin = req.body.password

        // Check username or email
        let queryUser = 'SELECT * FROM user WHERE username = ? or email = ?'
        let getUser = await conn.query(queryUser,[usernameLogin,usernameLogin])
        // Select value and index 0
        let dataUser = getUser[0][0]
        if(!dataUser){
            usernameInvalid = {
                element: "username",
                valid: false,
                message: "Username ไม่ถูกต้อง!"
            }
            return res.send(usernameInvalid)
        } 
        
        //if password is not correct.
        if(dataUser.firstpassword != passwordLogin){
            passwordInvalid = {
                element: "password",
                valid: false,
                message: "Password ไม่ถูกต้อง!"
            }
            return res.send(passwordInvalid)
        }

        // Output user when username or email and password correct.
        res.json({
            username: dataUser.username,
            firstname: dataUser.firstname,
            lastname: dataUser.lastname,
            email: dataUser.email,
            age: dataUser.age,
            birthday: dataUser.birthday,
            phone: dataUser.phone,
            valid: true
        })

    } catch(error) {
        console.error('Error fetching users:', error.message)
        res.status(500).json({error: 'Error fetching users'})
    }

})

// Post data register user.
app.post('/user/register', async (req,res) =>{
    const dataUserRegister = req.body
    const results = conn.query("INSERT INTO user SET ?", dataUserRegister)
    res.json({
        message: "insert complete",
        result: results[0]
    })
}) 

app.listen(8000, async () => {
    await connectMySQL()
    console.log("Server started on port 8000")
})