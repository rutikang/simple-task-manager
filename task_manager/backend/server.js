const express = require('express')
const app = express()
const cors = require('cors')

const mysql = require('mysql2')

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'kasibante',
    database:'crud'
})

app.use(express.json())
app.use(cors())


app.get('/', (req,res)=>{
    // res.json('Hello')
    const sql = 'SELECT * FROM tasks';
    db.query(sql, (err,data)=>{
        if(err)return console.log(err)
        return res.json(data)
    })
})

app.post('/create', (req,res)=>{

    const sql = 'INSERT INTO tasks (`Task`, `By`) VALUES (?)';
    const values = [
        req.body.task,
        req.body.by
    ]
    db.query(sql, [values], (err,data)=>{
        if(err)return console.log(err)
        return res.json(data)
    })
})

app.delete('/delete/:idtasks', (req,res)=>{

    const sql = 'DELETE FROM tasks WHERE idtasks = ?';
    const id = req.params.idtasks;
    db.query(sql, [id], (err,data)=>{
        if(err)return console.log(err)
        return res.json(data)
    })
})


app.listen(8081, ()=>{
    console.log('Server listening')
})