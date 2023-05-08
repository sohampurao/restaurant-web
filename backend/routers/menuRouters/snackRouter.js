import express from "express";
import expressAsyncHandler from "express-async-handler";
import itemsdata from "../../Menuitemsdata.js";
import Snack from "../../models/menuModels/snackModel.js";
import {isAdmin, isAuth} from '../../utils.js';

const snackRouter = express.Router();

snackRouter.get('/', expressAsyncHandler(async(req, res)=> {
    const menuItems = await Snack.find({});
    res.send(menuItems);
})
);

snackRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    const createdMenu = await Snack.insertMany(itemsdata.snacksMenu);
    res.send({createdMenu})
})
);

snackRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const menuitem = await Snack.findById(req.params.id)
        if (menuitem) {
        res.send(menuitem);
        } else {
        res.status(404).send({ message: 'Product Not Found' });
        }
})
);

snackRouter.post(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const menuItem = new Snack({
            name: 'sample name ' + Date.now(),
            image: 'https://via.placeholder.com/360x326.jpg',
            price: 0,
            category: 'snacks',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
        });
        const createdMenu = await menuItem.save();
        res.send({message: 'Menu Item Created', menuItem: createdMenu});
    })
);

snackRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const menuItemId = req.params.id;
        const menuItem = await Snack.findById(menuItemId);
        if(menuItem) {
            menuItem.name = req.body.name;
            menuItem.price = req.body.price;
            menuItem.text = req.body.text;
            menuItem.category = 'snacks';
            menuItem.image = req.body.image;
            const updatedmenu = await menuItem.save();
            res.send({message: 'Menu Item Updated', menuItem: updatedmenu});
        } else {
            res.status(404).send({message: 'Menu Item Not Found'});
        }
    })
)

snackRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const menuItem = await Snack.findById(req.params.id);
        if(menuItem) {
            const deleteMenu = await menuItem.remove();
            res.send({message: 'Menu Item Deleted Successfully', menuItem: deleteMenu});
        } else {
            res.status(404).send({message: 'Menu Item Not Found'});
        }
    })
);

export default snackRouter;