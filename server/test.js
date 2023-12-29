const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let users = []

// Show text "/"
app.get('/user/get/:id', (req,res) => {
    const id = req.params.id

    // find user by id.
    const getUser = users.find((user) => user.id == parseInt(id))

    // if it not found user send message
    if(!getUser){
        return res.send("It not found id in user.")
    }

    res.json({
        id: getUser.id,
        firstname: getUser.firstname,
        lastname: getUser.lastname,
        age: getUser.age
    })
})

// Send new user "/user"
app.post('/user/add/', (req,res) => {
    const textData = req.body
    const newUser = {
        id: textData.id,
        firstname: textData.firstname,
        lastname: textData.lastname,
        age: textData.age
    }

    users.push(newUser)

    res.status(201).send({
        message: 'user create successfully',
        user: newUser
    })
})

// Put update user "/user:id"
app.put('/user/update/:id', (req,res) => {
    const id = req.params.id
    const data = req.body

    // find id user
    const userToUpdate = users.find((user) => user.id === parseInt(id))

    // if it not found user send message.
    if(!userToUpdate){
        return res.json({message: "It not found user by id."})
    }

    // update information of user.
    userToUpdate.firstname = data.firstname || userToUpdate.firstname
    userToUpdate.lastname = data.lastname || userToUpdate.lastname
    userToUpdate.age = data.age || userToUpdate.age

    res.json({message: "Update user", user: userToUpdate})
})

// Patch update user field "/user:id"
app.patch('/user/update-field/:id', (req,res) => {
    const id = req.params.id
    const data = req.body

    // find id user by id.
    const updateFieldUser = users.find((user) => user.id == parseInt(id))

    // if it not found id.
    if(indexUser != -1){
        return res.json({message: "It not found id user."})
    }
    
    // update field "firstname"
    if(data.firstname){
        updateFieldUser.firstname = data.firstname
    }

    // update field "lastname"
    if(data.lastname){
        updateFieldUser.lastname = data.lastname
    }

    // update field "age"
    if(data.age){
        updateFieldUser.age = data.age
    }

    // 
    res.json({
        indexUser: indexUser,
        messsage: "Update data user success.",
        user: updateFieldUser
    })
})

// detele user by id 
app.delete('/user/delete/:index', (req,res) => {
    const index = req.params.index

    // Check index valid
    if(index >=0 && index < users.length){
        // Remove user index 
        const deleteUser = users.splice(index,1)[0]
        res.json({
            message: "Detele user success",
            delete: deleteUser
        })
    }
    else{
        res.send("It not found user by index")
    }
})

app.listen(8000, () => {
    console.log(`Example app listening on port 8000`)
})