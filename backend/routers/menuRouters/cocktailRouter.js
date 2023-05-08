import express from "express";
import expressAsyncHandler from "express-async-handler";
import itemsdata from "../../Menuitemsdata.js";
import Cocktail from "../../models/menuModels/cocktailModel.js";
import {isAdmin, isAuth} from '../../utils.js';

const cocktailRouter = express.Router();

cocktailRouter.get('/', expressAsyncHandler(async(req, res)=> {
    const menuItems = await Cocktail.find({});
    res.send(menuItems);
})
);

cocktailRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    const createdMenu = await Cocktail.insertMany(itemsdata.cocktailMenu);
    res.send({createdMenu})
})
);

cocktailRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const menuitem = await Cocktail.findById(req.params.id)
        if (menuitem) {
            res.send(menuitem);
        } else {
            res.status(404).send({ message: 'Product Not Found' });
        }
    })
);

cocktailRouter.post(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const menuItem = new Cocktail({
            name: 'sample name ' + Date.now(),
            image: 'https://via.placeholder.com/360x326.jpg',
            price: 0,
            category: 'cocktail',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
        });
        const createdMenu = await menuItem.save();
        res.send({message: 'Menu Item Created', menuItem: createdMenu});
    })
);

cocktailRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const menuItemId = req.params.id;
        const menuItem = await Cocktail.findById(menuItemId);
        if(menuItem) {
            menuItem.name = req.body.name;
            menuItem.price = req.body.price;
            menuItem.text = req.body.text;
            menuItem.category = 'cocktail';
            menuItem.image = req.body.image;
            const updatedmenu = await menuItem.save();
            res.send({message: 'Menu Item Updated', menuItem: updatedmenu});
        } else {
            res.status(404).send({message: 'Menu Item Not Found'});
        }
    })
)

cocktailRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const menuItem = await Cocktail.findById(req.params.id);
        if(menuItem) {
            const deleteMenu = await menuItem.remove();
            res.send({message: 'Menu Item Deleted Successfully', menuItem: deleteMenu});
        } else {
            res.status(404).send({message: 'Menu Item Not Found'});
        }
    })
);
export default cocktailRouter;