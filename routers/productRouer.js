import express from "express";
import { getAll, getAllOrderForCustomer, getCustomerDetails, getPastWeekOrders, getSpecificDateData, lastmonthorders, removeUnusedcategories, searchCustomerByName } from "../controller/productController.js";
import { cancelOrder } from "../models/productModels.js";
const router = express.Router();

router.get("/categories", getAll);
router.delete("/un-used-categories", removeUnusedcategories);
router.get("/customer-detail", getCustomerDetails)
router.get("/customer-detail/:name", searchCustomerByName);
router.get("/all-order/:id", getAllOrderForCustomer);
router.get("/pending", getPastWeekOrders);
router.get("/last-month-orders", lastmonthorders);
router.get("/cancel/:id", cancelOrder)
router.get('/all-order/:fdate/:edate', getSpecificDateData);

export default router;