const axios  = require ('axios')


function getAllDogs(req, res){
    axios.get('https://api.thedogapi.com/v1/breeds')
    .then((response) => {
        res.status(200).json(response.data);
    })
}

module.exports = { getAllDogs }
