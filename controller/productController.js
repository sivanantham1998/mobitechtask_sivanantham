import { cancelOrder, getAllCategory, getbyCustomer, getCutomerdetails, lastMonthorders, pendingPastWeek, removeProducts, searchByName, specificDataRange } from "../models/productModels.js"

export const getAll = async (req, res) => {
    try {
        let data = await getAllCategory();
        res.status(200).json({ message: data[0] })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const removeUnusedcategories = async (req, res) => {
    try {
        let data = await removeProducts();
        res.status(200).json({ message: "unused category removed", data })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const getCustomerDetails = async (req, res) => {
    try {
        let data = await getCutomerdetails();
        res.status(200).json({ message: data })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const searchCustomerByName = async (req, res) => {
    try {
        let { name } = req.params;
        let data = await searchByName(name);
        res.status(200).json({ message: "data getting successfully", data })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const getAllOrderForCustomer = async (req, res) => {
    try {
        let { id } = req.params;
        let data = await getbyCustomer(id);
        res.status(200).json({ message: "Datas get", data })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const getPastWeekOrders = async (req, res) => {
    try {
        let data = await pendingPastWeek();
        res.status(200).json({ message: "Get past week pending datas", data })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const lastmonthorders = async (req, res) => {
    try {
        let data = await lastMonthorders()
        res.status(200).json({ message: "Get last month orders", data })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const cancelOrders = async (req, res) => {
    try {
        let { id } = req.params;
        let data = await cancelOrder(id)
        res.status(200).json({ message: data })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const getSpecificDateData = async (req, res) => {
    try {
        let { fdate, edate } = req.params;
        console.log(req.params.fdate, req.params.edate)
        let data = await specificDataRange(fdate, edate)
        res.status(200).json({ message: `data between ${fdate} to ${edate}`, data })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}