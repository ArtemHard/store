import {db}  from '../data/db'


const getProducts = (req, res) => {
    
  
    const data =  'dataFromServer'
    res.json(db.products)
}


export {
    getProducts
}