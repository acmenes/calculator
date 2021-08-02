const { request, response } = require('express')
const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded( { extended:true }))

app.get('/', (request, response) => {
    
})

app.get('/mean', (request, response) => {

})

app.get('/median', (request, response) => {
    
})

app.get('/mode', (request, response) => {
    
})

/// a port is the first argument
app.listen(3000, () => {
    console.log("App on port 3000")
})