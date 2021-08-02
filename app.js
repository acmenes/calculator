const { request, response } = require('express')
const express = require('express')
const _ = require('lodash')
const lodashArray = require('lodash/array')
const lodashexpress = require('lodash-express')

/// using the helpers was giving me issues, so I replicated the operations in this file
/// using new names
const { getMean, getMedian, getMode } = require('./helpers')

const ExpressError = require('./expressError');

const app = express()

/// this tells the app to use json on every request
app.use(express.json())
app.use(express.urlencoded( { extended:true }))


//functions are replicated here because my helpers don't seem to work

// function calcMean(nums) {
//     let total = 0
//     for(let i = 0; i < nums.length; i++) {
//         total += nums[i]
//     }
//     let mean = total/nums.length
//     return mean;
// }

function calcMedian(nums){

}

function calcMode(nums) {

}

app.get('/', (request, response) => {
    throw new ExpressError('this is an error', 404)
})

app.get('/mean', (request, response) => {
    let nums = request.query.nums.split(',')
    numsArray = []
    for (let i = 0; i < nums.length; i++){
        numInt = parseInt(nums[i], 10)
        numsArray.push(numInt)
    }
    console.log(numsArray)
    return response.json({
        operation: "mean",
        value: _.mean(numsArray)
    })

})

app.get('/median', (request, response) => {
    let nums = request.query.nums.split(',')
    numsArray = []
    for (let i = 0; i < nums.length; i++){
        numInt = parseInt(nums[i], 10)
        numsArray.push(numInt)
    }
    console.log(numsArray)
    return response.json({
        operation: "median",
        value: "value goes here"
    })
})

app.get('/mode', (request, response) => {
    let nums = request.query.nums.split(',')
    numsArray = []
    for (let i = 0; i < nums.length; i++){
        numInt = parseInt(nums[i], 10)
        numsArray.push(numInt)
    }
    console.log(numsArray)
    return response.json({
        operation: "mode",
        value: "value goes here"
    })
})

/// this error handler goes at the end so it doesn't run
/// for every single request
app.use((error, request, response, next) => {
    console.log(error.message)
    return response.json({
        error: error,
        message: error.message
    })
})

/// a port is the first argument
app.listen(3000, () => {
    console.log("App on port 3000")
})