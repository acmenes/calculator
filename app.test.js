/// I didn't name functions in my routes yet, but I will rewrite my code 
/// to make use of a helpers file and call these functions

describe("#calcMean", function(){
    it("finds the average of an array of numbers", function(){
        expect(calcMean([1,4,5,7])).toEqual(4.25)
        expect(calcMean([2,4,6])).toEqual(4)
    })
})

describe("#calcMedian", function(){
    it("finds the middle value in an array of numbers", function(){
        expect(calcMedian([4,5,1,3,7])).toEqual(4)
        expect(calcMedian([5,6,2,3,9])).toEqual(5)
    })
})

describe('#calcMode', function(){
    it("finds the most frequently occuring number in an array", function(){
        expect(calcMode([1,2,1,1,1,3,])).toEqual(1)
        expect(calcMode([2,2,4,5,2,2,2,2])).toEqual(2)
    })
})
