import Product from "../models/product.js";

class ProductsController{

   async get_all(req, res){
        try{
            const allProducts = await Product.find()
            res.json(allProducts)

        } catch(err){
            res.status(400).json(err)
        }
    }

   async create(req, res){
        try {
            const newProduct = await Product.create({...req.body})
            res.json(newProduct)

        } catch (error) {
            res.status(402).json(error)
        }
    }

   async get_one(req, res){
        try{
            const product = await Product.findById(req.params.id)
            res.json(product)

        } catch(err){
            res.status(400).json(err)
        }
    }

   async update(req, res){
        try{
            const product = await Product.findByIdAndUpdate(req.params.id, {...req.body}, {new: true})
            res.json(product)

        } catch(err) {
            res.status(400).json(err)
        }
    }

   async delete(req, res){
        try{
            await Product.findByIdAndDelete(req.params.id)
            res.status(204)

        } catch(err){
            res.json(err)
        }
    }
}

export default new ProductsController()