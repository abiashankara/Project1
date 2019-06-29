
exports.add = function(variable1, variable2, callback){
    let result = variable1 + variable2
    if(!variable1 && !variable2) {
        return callback (new Error ('insert number to variable'))
    } else{
        return callback(null, result);
    }
}

exports.minus = function(variable1, variable2, callback){
    let result = variable1 - variable2
    if(!variable1 && !variable2) {
        return callback (new Error ('insert number to variables'))
    }
    else {
        return callback(null, result)
    }
}

exports.multiply = function(variable1, variable2, callback){
    let result = variable1*variable2
    if(!variable1 && !variable2){
        return callback (new Error('insert number to variables'))
    }
    else {
        return callback(null, result)
    }
}

exports.divide = function(variable1, variable2, callback){
    let result = variable1/variable2
    if(!variable1 && !variable2){
        return callback (new Error('insert number to variables'))
    }
    else {
        return callback(null, result)
    }
}

exports.square = function(variable1, callback){
    let result = Math.pow(variable1, 2)
    if(!variable1){
        return callback (new Error('insert number to variable'))
    }
    else{
        return callback(null, result)
    }
}
