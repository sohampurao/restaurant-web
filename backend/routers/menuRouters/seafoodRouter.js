import express from "express";
import expressAsyncHandler from "express-async-handler";
import itemsdata from "../../Menuitemsdata.js";
import Seafood from "../../models/menuModels/seafoodModel.js";
import {isAdmin, isAuth} from '../../utils.js';

const seafoodRouter = express.Router();

seafoodRouter.get('/', expressAsyncHandler(async(req, res)=> {
    const menuItems = await Seafood.find({});
    res.send(menuItems);
})
);

seafoodRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    const createdMenu = await Seafood.insertMany(itemsdata.seafoodMenu);
    res.send({createdMenu})
})
);

seafoodRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const menuitem = await Seafood.findById(req.params.id)
        if (menuitem) {
            res.send(menuitem);
        } else {
            res.status(404).send({ message: 'Product Not Found' });
        }
    })
);

seafoodRouter.post(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const menuItem = new Seafood({
            name: 'sample name ' + Date.now(),
            image: 'https://via.placeholder.com/360x326.jpg',
            price: 0,
            category: 'appetizer',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
        });
        const createdMenu = await menuItem.save();
        res.send({message: 'Menu Item Created', menuItem: createdMenu});
    })
);

seafoodRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const menuItemId = req.params.id;
        const menuItem = await Seafood.findById(menuItemId);
        if(menuItem) {
            menuItem.name = req.body.name;
            menuItem.price = req.body.price;
            menuItem.text = req.body.text;
            menuItem.category = 'seafood';
            menuItem.image = req.body.image;
            const updatedmenu = await menuItem.save();
            res.send({message: 'Menu Item Updated', menuItem: updatedmenu});
        } else {
            res.status(404).send({message: 'Menu Item Not Found'});
        }
    })
)

seafoodRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const menuItem = await Seafood.findById(req.params.id);
        if(menuItem) {
            const deleteMenu = await menuItem.remove();
            res.send({message: 'Menu Item Deleted Successfully', menuItem: deleteMenu});
        } else {
            res.status(404).send({message: 'Menu Item Not Found'});
        }
    })
);
export default seafoodRouter;