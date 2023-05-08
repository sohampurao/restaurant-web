import express from "express";
import expressAsyncHandler from "express-async-handler";
import itemsdata from "../../Menuitemsdata.js";
import Pizza from "../../models/menuModels/pizzaModel.js";
import {isAdmin, isAuth} from '../../utils.js';

const pizzaRouter = express.Router();

pizzaRouter.get('/', expressAsyncHandler(async(req, res)=> {
    const menuItems = await Pizza.find({});
    res.send(menuItems);
})
);

pizzaRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    const createdMenu = await Pizza.insertMany(itemsdata.pizzaMenu);
    res.send({createdMenu})
})
);

pizzaRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const menuitem = await Pizza.findById(req.params.id)
        if (menuitem) {
            res.send(menuitem);
        } else {
            res.status(404).send({ message: 'Product Not Found' });
        }
    })
);

pizzaRouter.post(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const menuItem = new Pizza({
            name: 'sample name ' + Date.now(),
            image: 'https://via.placeholder.com/360x326.jpg',
            price: 0,
            category: 'Pizza',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
        });
        const createdMenu = await menuItem.save();
        res.send({message: 'Menu Item Created', menuItem: createdMenu});
    })
);

pizzaRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const menuItemId = req.params.id;
        const menuItem = await Pizza.findById(menuItemId);
        if(menuItem) {
            menuItem.name = req.body.name;
            menuItem.price = req.body.price;
            menuItem.text = req.body.text;
            menuItem.category = 'pizza';
            menuItem.image = req.body.image;
            const updatedmenu = await menuItem.save();
            res.send({message: 'Menu Item Updated', menuItem: updatedmenu});
        } else {
            res.status(404).send({message: 'Menu Item Not Found'});
        }
    })
)

pizzaRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const menuItem = await Pizza.findById(req.params.id);
        if(menuItem) {
            const deleteMenu = await menuItem.remove();
            res.send({message: 'Menu Item Deleted Successfully', menuItem: deleteMenu});
        } else {
            res.status(404).send({message: 'Menu Item Not Found'});
        }
    })
);
export default pizzaRouter;