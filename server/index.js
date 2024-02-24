const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2/promise')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const path = require('path');

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use(express.static('../public'))

const secret = "mysecret"
let conn = null

// function connect database in phpmyadmin
const connectMySQL = async() => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'rerun'
    })    
}

// login
app.get("/", async(req,res) => {
    res.sendFile(path.join(__dirname, '../public/login/login.html'));
})

// register
app.get("/register.html", async(req,res) => {
    res.sendFile(path.join(__dirname, '../public/register/register.html'));
})

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
        
        // Compare password login with password in database by bcrypt.
        const passwordMatch = await bcrypt.compare(passwordLogin, dataUser.password)
        
        //if password is not correct.
        if(!passwordMatch){
            passwordInvalid = {
                element: "password",
                valid: false,
                message: "Password ไม่ถูกต้อง!"
            }
            return res.send(passwordInvalid)
        }

        // JWT 
        const token = jwt.sign(
            {
                username: dataUser.username
            },
                secret,
            {
                expiresIn: "1h"
            }
        )

        res.json({
            message: "login success",
            token
        })

    } catch(error) {
        console.error('Error fetching users:', error.message)
        res.status(500).json({error: 'Error fetching users'})
    }

})

// Get data event of client. (history page)
app.post('/user/history', async(req,res) => {

    try{
        const authToken = req.header("authorization")

        // verify
        // write code ..

        const queryGetDataEventClient = "Select * FROM form"
        let [results] = await conn.query(queryGetDataEventClient)

        res.json({
            results
        })

    } catch(error){
        console.error('Error fetching history events:', error.message)
        res.status(500).json({error: 'Error fetching history events'})
    }

})

// Get check data duplicate.
app.get('/user/resgister-check-field', async (req,res) =>{

    const dataUserRegister = req.body

    // Check username, email, number-card and phone
    let username = dataUserRegister.username
    let email = dataUserRegister.email
    let numbercard = dataUserRegister.numbercard
    let phone = dataUserRegister.phone

    // Check username or email
    let queryUser = 'SELECT username, email, numbercard, phone FROM user'
    let getUser = await conn.query(queryUser)
    let users = getUser[0]

    // Check username duplicate.
    if(users.find(user => user.username === username) && username != ""){
        return res.json({
            message: "Username ถูกใช้งานไปแล้ว!"
        })
    }

    // Check email duplicate.
    if(users.find(user => user.email === email)){
        return res.json({
            message: "Email ถูกใช้งานไปแล้ว!"
        })
    }

    // Check numbercard duplicate.
    if(users.find(user => user.numbercard === numbercard)){
        return res.json({
            message: "เลขบัตรประจำตัวประชาชนถูกใช้งานไปแล้ว!"
        })
    }

    // Check numbercard duplicate.
    if(users.find(user => user.phone === phone)){
        return res.json({
            message: "เบอร์โทรถูกใช้งานไปแล้ว!"
        })
    }

    res.json({
        message: "check field success"
    })
})

// Post data register user.
app.post('/user/register', async (req,res) =>{

    try{
        const dataUserRegister = req.body
        
        // Use bcrypt convert password.
        dataUserRegister.password = await bcrypt.hash(dataUserRegister.password, 10)
        
        // it ready to insert data.
        const results = conn.query("INSERT INTO user SET ?", dataUserRegister)

        res.json({
            message: "insert data success.",
            result: results[0]
        })
    } catch(error){
        console.error('Insert data register error:', error.message)
        res.status(500).json({error: 'Insert data register error'})
    }
    
})

// Post data register event.
app.post('/history/register-event'), async (req,res) =>{
    
    try{
        let dataRegisterEvent = req.body

        // it ready to insert data.
        const results = conn.query("INSERT INTO form SET ?", dataRegisterEvent)

        res.json({
            message: "insert data register event success.",
            result: results[0]
        })
    } catch(error){
        console.error('Insert data register event error:', error.message)
        res.status(500).json({error: 'Insert data register event error'})
    }
    
}

app.listen(8010, async () => {
    await connectMySQL()
    console.log("Server started on port 8010")
})