const express = require("express");
const router = express.Router();
const {
  getAllServices,
  getServiceById,
  updateService,
  addService,
} = require("../controller/service-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

router.get("/", getAllServices);

router.get("/:id", authMiddleware, adminMiddleware, getServiceById);

router.post("/add", authMiddleware, adminMiddleware, addService);

router.patch("/update/:id", authMiddleware, adminMiddleware, updateService);

module.exports = router;
