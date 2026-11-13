import express from "express";
import dotenv from "dotenv";
// import data from "./config/db.js"
import products from "./routers/productRouer.js"
dotenv.config();
const app = express();
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.method, req.originalUrl);
    next();
})
app.use(express.json());

app.use("/api", products)
app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`)
})