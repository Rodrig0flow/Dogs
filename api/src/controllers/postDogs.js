const axios = require ('axios') 

function postDogs(req, res){
    let data = req.body
    axios.res.json(data)
}

module.exports = { postDogs }