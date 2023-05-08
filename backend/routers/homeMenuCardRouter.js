import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../Menucardsdata.js";
import HomeMenuCard from "../models/homeMenuCardModel.js";

const homeMenuCardRouter = express.Router();
homeMenuCardRouter.get('/', expressAsyncHandler(async (req, res) => {
    const homemenucards = await HomeMenuCard.find({});
    res.send(homemenucards)
}))

homeMenuCardRouter.get('/seed', expressAsyncHandler(async(req, res) =>{
    await HomeMenuCard.remove({})
    const createdMenucards = await HomeMenuCard.insertMany(data.homeMenuCards);
    res.send({createdMenucards});
}))

export default homeMenuCardRouter;