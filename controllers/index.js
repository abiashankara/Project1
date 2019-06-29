exports.RegisterUser = function (name, biodata, callback){
    let result = {
        name: name,
        bio: biodata
    }
    if (!name && !biodata){
        return callback (new Error('missing details'))
    }
    else {
        return callback (null, result)
    }
    
}
