const axios = require ('axios');
const { Temperament } = require('../db')

async function injecTemp (){
    await axios.get(`https://api.thedogapi.com/v1/breeds`)
    .then( r=>{
       let temperament = []
       r.data.map(e=>{
           if(e.hasOwnProperty("temperament")){
               if(e["temperament"].includes(",")){
                   if(e["temperament"].includes(" ")){
                    e["temperament"].split(" ").join("").split(",").map(j=>{
                        if(!temperament.includes(j)){
                            temperament.push(j)
                        }
                    })
                   }
                   if(!e["temperament"].includes(" ")){
                    e["temperament"].split(",").map(j=>{
                        if(!temperament.includes(j)){
                            temperament.push(j)
                        }
                    })
                   }
                   
               }
           }
       })
      temperament.map((e,i)=> Temperament.create({name:e}))
   })
}

module.exports = { injecTemp }

