import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { HomeMenuCardReducer, MenuPageCardReducer } from './reducers/menuCardReducers';
import { appetizerCreateReducer, AppetizerItemsReducer, burgerCreateReducer, BurgerMenuItemsReducer, cocktailCreateReducer, CocktailMenuItemsReducer, dessertCreateReducer, DessertMenuItemsReducer, mainMenuCreateReducer, MainMenuItemsReducer, MenuItemDeleteReducer, pizzaCreateReducer, PizzaMenuItemsReducer, Productdetailsreducer, productUpdateReducer, seafoodCreateReducer, SeafoodMenuItemsReducer, snackCreateReducer, SnacksItemsReducer } from './reducers/menuItemsReducers';
import { cartReducer } from './reducers/Cartreducer';
import { userDetailsReducer, userRegisterReducer, userSigninReducer, userUpdateProfileReducer } from './reducers/userReducers';
import { orderCreateReducer, orderDeleteReducer, orderDeliverReducer, orderDetailsReducer, orderListReducer, orderMineListReducer, orderPayReducer } from './reducers/orderReducers';

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    },
    Cart: {
        cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
        shippingAddress: localStorage.getItem('shippingAddress') 
        ? JSON.parse(localStorage.getItem('shippingAddress'))
        : {},
        paymentMethod: 'PayPal',
    }
};
const reducer = combineReducers({
    homeCardList : HomeMenuCardReducer,
    menuCardlist : MenuPageCardReducer,
    burgerMenuList : BurgerMenuItemsReducer,
    snacksMenuList : SnacksItemsReducer,
    appetizerMenuList : AppetizerItemsReducer,
    seafoodMenuList : SeafoodMenuItemsReducer,
    mainMenuList: MainMenuItemsReducer,
    pizzaMenuList: PizzaMenuItemsReducer,
    cocktailMenuList : CocktailMenuItemsReducer,
    dessertMenuList : DessertMenuItemsReducer,
    ProductDetails : Productdetailsreducer,
    Cart : cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderMineList: orderMineListReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile : userUpdateProfileReducer,
    appetizerCreate: appetizerCreateReducer,
    burgerCreate: burgerCreateReducer,
    cocktailCreate: cocktailCreateReducer,
    dessertCreate: dessertCreateReducer,
    mainMenuCreate: mainMenuCreateReducer,
    pizzaCreate: pizzaCreateReducer,
    seafoodCreate: seafoodCreateReducer,
    snackCreate: snackCreateReducer,
    productUpdate: productUpdateReducer,
    orderList: orderListReducer,
    menuItemDelete: MenuItemDeleteReducer,
    orderDelete: orderDeleteReducer,
    orderDeliver: orderDeliverReducer,
})

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(thunk)));

export default store;