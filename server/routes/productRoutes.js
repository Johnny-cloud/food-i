import express from "express";
import ProductsController from "../controllers/productsController.js";

const productRoutes = express.Router()

productRoutes.get('/', ProductsController.index)
productRoutes.post("/", ProductsController.create)
productRoutes.get("/:id", ProductsController.show)
productRoutes.put("/:id", ProductsController.update)
productRoutes.delete("/:id", ProductsController.destroy)

export default productRoutes