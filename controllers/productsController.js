let path = require('path')

const controller = {
    product:(req, res)=>{
        let idProducto = req.params.id
        res.send(`producto con id ${idProducto}`)
    }
}
module.exports = controller;