module.exports = function towelSort (matrix) {
    let arr = [];
    
    if (matrix === undefined || matrix.length == 0) {
    return arr;
    }

    arr = matrix.reduce(function (resultArr, nextElem, index) {
     
    if (index % 2) {
        return resultArr.concat(nextElem.reverse());
    } else {
    return resultArr.concat(nextElem);
    }
      
    });
      
    return arr;
}
