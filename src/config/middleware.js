const validate = function  validate(id, res){
    return /^\d+$/.test(userId) ? res.send("Si es numero") : res.status(404), res.send("no es numero")
}

module.exports ={ validate }
