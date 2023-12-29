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
// get user in database.
app.get("/user/get/:id", async (req,res) => {

    try{
        let users = await conn.query('SELECT * FROM user')
        const id = req.params.id

        // find id in database.
        let getUser = users[0].find((user) => user.id == parseInt(id))

        //if it not found user send message
        if(!getUser){
            return res.send("It not found id in user.")
        }

        // Output user
        res.json({
            id: getUser.id,
            firstname: getUser.firstname,
            lastname: getUser.lastname,
            age: getUser.age
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