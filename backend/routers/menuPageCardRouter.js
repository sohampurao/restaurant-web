import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../Menucardsdata.js";
import MenuPageCard from "../models/menuPageCardModel.js";

const menuPageCardRouter = express.Router();
menuPageCardRouter.get('/', expressAsyncHandler(async (req, res) => {
    const menupagecards = await MenuPageCard.find({});
    res.send(menupagecards)
}))

menuPageCardRouter.get('/seed', expressAsyncHandler(async(req, res) =>{
    await MenuPageCard.remove({})
    const createdMenucards = await MenuPageCard.insertMany(data.MenuPageCards);
    res.send({createdMenucards});
}))

export default menuPageCardRouter;