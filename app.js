const { request, response } = require('express')
const express = require('express')
const _ = require('lodash')
const lodashArray = require('lodash/array')
const lodashexpress = require('lodash-express')

// const { getMean, getMedian, getMode } = require('./helpers')

const ExpressError = require('./expressError');

const app = express()

/// this tells the app to use json on every request
app.use(express.json())
app.use(express.urlencoded( { extended:true }))

app.get('/', (request, response) => {
    throw new ExpressError('this is an error', 404)
})

app.get('/mean', (request, response) => {
    let nums = request.query.nums.split(',')

    if(!request.query.nums){
        throw new ExpressError("You must pass in an array of numbers.", 400)
    }

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

    if(!request.query.nums){
        throw new ExpressError("You must pass in an array of numbers.", 400)
    }

    numsArray = []
    for (let i = 0; i < nums.length; i++){
        numInt = parseInt(nums[i], 10)
        numsArray.push(numInt)
        numsArray.sort((a,b) => a-b)
    }
    console.log(numsArray)
    let midNum = Math.round(((numsArray.length - 1)/2))
    console.log(midNum)
    if(numsArray.length % 2 === 0){
        return response.json({
            operation: "median",
            value: "please submit an odd amount of values"
        })
    }
    else{
        return response.json({
            operation: "median",
            value: numsArray[midNum]
        })
    }
})

app.get('/mode', (request, response) => {
    let nums = request.query.nums.split(',')

    if(!request.query.nums){
        throw new ExpressError("You must pass in an array of numbers.", 400)
    }

    numsArray = []

    for (let i = 0; i < nums.length; i++){
        numInt = parseInt(nums[i], 10)
        numsArray.push(numInt)
        numsArray.sort((a,b) => a-b)
    }

    console.log(numsArray)
    let mode = 0
    let count = 0
    for (let x = 0; x < numsArray.length; x++){
        for (let y = 0; y < numsArray.length -1; y++) {
            if(numsArray[x] === numsArray[y]) {
                mode = numsArray[y]
                count++
            }
        }
        console.log(mode)
        return mode
    }
    return response.json({
        operation: "mode",
        value: mode
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