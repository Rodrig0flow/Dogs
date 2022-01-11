const axios = require('axios');

function nameDogs(req, res, nex){
    const { name } = req.query
    if(name){
        axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
        .then(response => {
            res.status(200).json(response.data);
        },(err) => {
            res.status(400).json(err)
        })
    }else{
     nex()
    }
}

module.exports = { nameDogs }
