const _ = require('lodash')

// this function takes an array of numbers and finds the average
function getMean(nums) {
    let nums = request.query.nums.split(',')
    
    numsArray = []
    for (let i = 0; i < nums.length; i++){
        numInt = parseInt(nums[i], 10)
        numsArray.push(numInt)
    }
    console.log(numsArray)
}

//this function takes an array of numbers and finds the middle number
function getMedian() {

}

//this function takes an array of numbers and finds the most frequently occuring number
function getMode() {

}

module.exports = (
    getMean, getMedian, getMode
)