import { Router } from "express";

import { dataProducto } from "../database/data-product.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({ product: dataProducto });
});

export default router;
