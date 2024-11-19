import { orderRouter } from "./routes/orderRouter";
import { depthRouter } from "./routes/depthRouter.ts";
import { tradesRouter } from "./routes/tradesRouter.ts";


const express = require('express');
const cors = require('cors');
const app =express();
app.use(express.json());
app.use(cors());

app.use('/api/v1/order',orderRouter);
app.use('/api/v1/depth', depthRouter);
app.use('/api/v1/trades', tradesRouter);
app.listen(5000,()=>{
    console.log("server running")
})