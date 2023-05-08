import express from "express";
import expressAsyncHandler from "express-async-handler";
import itemsdata from "../../Menuitemsdata.js";
import Dessert from "../../models/menuModels/dessertModel.js";
import {isAdmin, isAuth} from '../../utils.js';


const dessertRouter = express.Router();

dessertRouter.get('/', expressAsyncHandler(async(req, res)=> {
    const menuItems = await Dessert.find({});
    res.send(menuItems);
})
);

dessertRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    const createdMenu = await Dessert.insertMany(itemsdata.dessertMenu);
    res.send({createdMenu})
})
);

dessertRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const menuitem = await Dessert.findById(req.params.id)
        if (menuitem) {
            res.send(menuitem);
        } else {
            res.status(404).send({ message: 'Product Not Found' });
        }
    })
);

dessertRouter.post(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const menuItem = new Dessert({
            name: 'sample name ' + Date.now(),
            image: 'https://via.placeholder.com/360x326.jpg',
            price: 0,
            category: 'dessert',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
        });
        const createdMenu = await menuItem.save();
        res.send({message: 'Menu Item Created', menuItem: createdMenu});
    })
);

dessertRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const menuItemId = req.params.id;
        const menuItem = await Dessert.findById(menuItemId);
        if(menuItem) {
            menuItem.name = req.body.name;
            menuItem.price = req.body.price;
            menuItem.text = req.body.text;
            menuItem.category = 'dessert';
            menuItem.image = req.body.image;
            const updatedmenu = await menuItem.save();
            res.send({message: 'Menu Item Updated', menuItem: updatedmenu});
        } else {
            res.status(404).send({message: 'Menu Item Not Found'});
        }
    })
)

dessertRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const menuItem = await Dessert.findById(req.params.id);
        if(menuItem) {
            const deleteMenu = await menuItem.remove();
            res.send({message: 'Menu Item Deleted Successfully', menuItem: deleteMenu});
        } else {
            res.status(404).send({message: 'Menu Item Not Found'});
        }
    })
);

export default dessertRouter;