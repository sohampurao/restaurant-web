import express from "express";
import expressAsyncHandler from "express-async-handler";
import itemsdata from "../../Menuitemsdata.js";
import Mainmenu from "../../models/menuModels/mainmenuModel.js";
import {isAdmin, isAuth} from '../../utils.js';

const mainmenuRouter = express.Router();

mainmenuRouter.get('/', expressAsyncHandler(async(req, res)=> {
    const menuItems = await Mainmenu.find({});
    res.send(menuItems);
})
);

mainmenuRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    const createdMenu = await Mainmenu.insertMany(itemsdata.mainMenu);
    res.send({createdMenu})
})
);

mainmenuRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const menuitem = await Mainmenu.findById(req.params.id)
        if (menuitem) {
            res.send(menuitem);
        } else {
            res.status(404).send({ message: 'Product Not Found' });
        }
    })
);

mainmenuRouter.post(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const menuItem = new Mainmenu({
            name: 'sample name ' + Date.now(),
            image: 'https://via.placeholder.com/360x326.jpg',
            price: 0,
            category: 'mainmenu',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
        });
        const createdMenu = await menuItem.save();
        res.send({message: 'Menu Item Created', menuItem: createdMenu});
    })
);

mainmenuRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const menuItemId = req.params.id;
        const menuItem = await Mainmenu.findById(menuItemId);
        if(menuItem) {
            menuItem.name = req.body.name;
            menuItem.price = req.body.price;
            menuItem.text = req.body.text;
            menuItem.category = 'mainmenu';
            menuItem.image = req.body.image;
            const updatedmenu = await menuItem.save();
            res.send({message: 'Menu Item Updated', menuItem: updatedmenu});
        } else {
            res.status(404).send({message: 'Menu Item Not Found'});
        }
    })
)

mainmenuRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const menuItem = await Mainmenu.findById(req.params.id);
        if(menuItem) {
            const deleteMenu = await menuItem.remove();
            res.send({message: 'Menu Item Deleted Successfully', menuItem: deleteMenu});
        } else {
            res.status(404).send({message: 'Menu Item Not Found'});
        }
    })
);
export default mainmenuRouter;