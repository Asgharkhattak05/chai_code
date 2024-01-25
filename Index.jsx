require('dotenv').config()
const express = require('express')
const app = express()



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter", (req ,res)=>{
    res.send("AsgharTwiter.93")
})
app.get("/person" , ( req, res ) => {
    res.send("<h1>Hello Chai our Asghar</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(` App Listening On`)
})