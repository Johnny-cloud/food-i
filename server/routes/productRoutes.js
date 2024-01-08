import express from "express";
import ProductsController from "../controllers/productsController.js";

const router = express.Router()

router.get('/', ProductsController.get_all)
router.post("/", ProductsController.create)
router.get("/:id", ProductsController.get_one)
router.put("/:id", ProductsController.update)
router.delete("/:id", ProductsController.delete)

export default router