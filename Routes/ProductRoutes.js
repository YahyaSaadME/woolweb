const express = require("express")
const ProductModel = require("../Modals/ProductSchema")

const PR = express.Router();

PR.get('/', async (req, res) => {
      try{
            const response = await ProductModel.find({});
            res.send(response)

      }
      catch(error){
            res.status(500).json({message: error.message})
      }
})

PR.post('/', async (req, res) => {
     try{
        const product = new ProductModel(req.body);
        const response = await product.save();
        res.send(response);
     }
     catch(error){
        res.status(500).json({message: error.message})
     }
})

PR.get('/:id', async (req, res) => {

    try{
        const product = await ProductModel.findById(req.params.id); 
      res.json(product);

      if(!product){
        res.status(404).json({message: 'Product not found'})
      }
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
      
})


PR.put('/:id', async (req, res) => {
               
        try{
            const product = await ProductModel.findById(req.params.id); 
            if(!product){
                res.status(404).json({message: 'Product not found'})
            }
            else{
                product.productName = req.body.productName;
                product.imgUrl = req.body.imgUrl;
                const response = await product.save();
                res.json(response);
            }
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
        
})

PR.delete('/remove/:id', async (req, res) => {
    try{
        const product = await ProductModel.findById(req.params.id); 
        if(!product){
            res.status(404).json({message: 'Product not found'})
        }
        else{
            const response = await product.remove();
            res.json({message: 'Product deleted'});
        }
    } 
    catch(error){
         res.json(error)
    }

})


module.exports = PR



