import { APPETIZER_CREATE_FAIL, APPETIZER_CREATE_REQUEST, APPETIZER_CREATE_RESET, APPETIZER_CREATE_SUCCESS, APPETIZER_MENU_FAIL, APPETIZER_MENU_REQUEST, APPETIZER_MENU_SUCCESS, BURGER_CREATE_FAIL, BURGER_CREATE_REQUEST, BURGER_CREATE_RESET, BURGER_CREATE_SUCCESS, BURGER_MENU_FAIL, BURGER_MENU_REQUEST, BURGER_MENU_SUCCESS, COCKTAIL_CREATE_FAIL, COCKTAIL_CREATE_REQUEST, COCKTAIL_CREATE_RESET, COCKTAIL_CREATE_SUCCESS, COCKTAIL_MENU_FAIL, COCKTAIL_MENU_REQUEST, COCKTAIL_MENU_SUCCESS, DESSERT_CREATE_FAIL, DESSERT_CREATE_REQUEST, DESSERT_CREATE_RESET, DESSERT_CREATE_SUCCESS, DESSERT_MENU_FAIL, DESSERT_MENU_REQUEST, DESSERT_MENU_SUCCESS, MAINMENU_CREATE_FAIL, MAINMENU_CREATE_REQUEST, MAINMENU_CREATE_RESET, MAINMENU_CREATE_SUCCESS, MAINMENU_MENU_FAIL, MAINMENU_MENU_REQUEST, MAINMENU_MENU_SUCCESS, MENUITEM_DELETE_FAIL, MENUITEM_DELETE_REQUEST, MENUITEM_DELETE_RESET, MENUITEM_DELETE_SUCCESS, PIZZA_CREATE_FAIL, PIZZA_CREATE_REQUEST, PIZZA_CREATE_RESET, PIZZA_CREATE_SUCCESS, PIZZA_MENU_FAIL, PIZZA_MENU_REQUEST, PIZZA_MENU_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_UPDATE_FAIL, PRODUCT_UPDATE_REQUEST, PRODUCT_UPDATE_RESET, PRODUCT_UPDATE_SUCCESS, SEAFOOD_CREATE_FAIL, SEAFOOD_CREATE_REQUEST, SEAFOOD_CREATE_RESET, SEAFOOD_CREATE_SUCCESS, SEAFOOD_MENU_FAIL, SEAFOOD_MENU_REQUEST, SEAFOOD_MENU_SUCCESS, SNACKS_MENU_FAIL, SNACKS_MENU_REQUEST, SNACKS_MENU_SUCCESS, SNACK_CREATE_FAIL, SNACK_CREATE_REQUEST, SNACK_CREATE_RESET, SNACK_CREATE_SUCCESS } from "../constants/menItemsConstant";

export const SnacksItemsReducer = (state = {loading :true, snacksmenu:[]}, action) => {
    switch(action.type) {
        case SNACKS_MENU_REQUEST:
            return {loading : true};
        case SNACKS_MENU_SUCCESS:
            return{loading : false,  snacksmenu : action.payload};
        case SNACKS_MENU_FAIL: 
            return{loading: false, error: action.payload}
        default :
            return state;
    }
}

export const AppetizerItemsReducer = (state = {loading :true, appetizermenu:[]}, action) => {
    switch(action.type) {
        case APPETIZER_MENU_REQUEST:
            return {loading : true};
        case APPETIZER_MENU_SUCCESS:
            return{loading : false,  appetizermenu : action.payload};
        case APPETIZER_MENU_FAIL: 
            return{loading: false, error: action.payload}
        default :
            return state;
    }
}

export const MainMenuItemsReducer = (state = {loading :true, mainmenu:[]}, action) => {
    switch(action.type) {
        case MAINMENU_MENU_REQUEST:
            return {loading : true};
        case MAINMENU_MENU_SUCCESS:
            return{loading : false,  mainmenu : action.payload};
        case MAINMENU_MENU_FAIL: 
            return{loading: false, error: action.payload}
        default :
            return state;
    }
}

export const PizzaMenuItemsReducer = (state = {loading :true, pizzamenu:[]}, action) => {
    switch(action.type) {
        case PIZZA_MENU_REQUEST:
            return {loading : true};
        case PIZZA_MENU_SUCCESS:
            return{loading : false,  pizzamenu : action.payload};
        case PIZZA_MENU_FAIL: 
            return{loading: false, error: action.payload}
        default :
            return state;
    }
}

export const DessertMenuItemsReducer = (state = {loading :true, dessertmenu:[]}, action) => {
    switch(action.type) {
        case DESSERT_MENU_REQUEST:
            return {loading : true};
        case DESSERT_MENU_SUCCESS:
            return{loading : false,  dessertmenu : action.payload};
        case DESSERT_MENU_FAIL: 
            return{loading: false, error: action.payload}
        default :
            return state;
    }
}

export const BurgerMenuItemsReducer = (state = {loading :true, burgermenu:[]}, action) => {
    switch(action.type) {
        case BURGER_MENU_REQUEST:
            return {loading : true};
        case BURGER_MENU_SUCCESS:
            return{loading : false,  burgermenu : action.payload};
        case BURGER_MENU_FAIL: 
            return{loading: false, error: action.payload}
        default :
            return state;
    }
}

export const SeafoodMenuItemsReducer = (state = {loading :true, seafoodmenu:[]}, action) => {
    switch(action.type) {
        case SEAFOOD_MENU_REQUEST:
            return {loading : true};
        case SEAFOOD_MENU_SUCCESS:
            return{loading : false,  seafoodmenu : action.payload};
        case SEAFOOD_MENU_FAIL: 
            return{loading: false, error: action.payload}
        default :
            return state;
    }
}

export const CocktailMenuItemsReducer = (state = {loading :true, cocktailmenu:[]}, action) => {
    switch(action.type) {
        case COCKTAIL_MENU_REQUEST:
            return {loading : true};
        case COCKTAIL_MENU_SUCCESS:
            return{loading : false,  cocktailmenu : action.payload};
        case COCKTAIL_MENU_FAIL: 
            return{loading: false, error: action.payload}
        default :
            return state;
    }
}

export const Productdetailsreducer = (
    state ={loading: true}, 
    action
    ) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {loading : true};
        case PRODUCT_DETAILS_SUCCESS:
            return {loading :false, product : action.payload}
        case PRODUCT_DETAILS_FAIL:
            return {loading : false, error: action.payload}
        default:
            return state;
    }
}

// for adding menuitems in frontend
export const appetizerCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case APPETIZER_CREATE_REQUEST:
            return {loading: true};
        case APPETIZER_CREATE_SUCCESS:
            return {loading: false, success: true, menuItem: action.payload};
        case APPETIZER_CREATE_FAIL:
            return {loading: false, error: action.payload};
        case APPETIZER_CREATE_RESET:
            return {};
        default:
            return state;
    }
}

export const burgerCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case BURGER_CREATE_REQUEST:
            return {loading: true};
        case BURGER_CREATE_SUCCESS:
            return {loading: false, success: true, menuItem: action.payload};
        case BURGER_CREATE_FAIL:
            return {loading: false, error: action.payload};
        case BURGER_CREATE_RESET:
            return {};
        default:
            return state;
    }
}

export const cocktailCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case COCKTAIL_CREATE_REQUEST:
            return {loading: true};
        case COCKTAIL_CREATE_SUCCESS:
            return {loading: false, success: true, menuItem: action.payload};
        case COCKTAIL_CREATE_FAIL:
            return {loading: false, error: action.payload};
        case COCKTAIL_CREATE_RESET:
            return {};
        default:
            return state;
    }
}

export const dessertCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case DESSERT_CREATE_REQUEST:
            return {loading: true};
        case DESSERT_CREATE_SUCCESS:
            return {loading: false, success: true, menuItem: action.payload};
        case DESSERT_CREATE_FAIL:
            return {loading: false, error: action.payload};
        case DESSERT_CREATE_RESET:
            return {};
        default:
            return state;
    }
}

export const mainMenuCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case MAINMENU_CREATE_REQUEST:
            return {loading: true};
        case MAINMENU_CREATE_SUCCESS:
            return {loading: false, success: true, menuItem: action.payload};
        case MAINMENU_CREATE_FAIL:
            return {loading: false, error: action.payload};
        case MAINMENU_CREATE_RESET:
            return {};
        default:
            return state;
    }
}

export const pizzaCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PIZZA_CREATE_REQUEST:
            return {loading: true};
        case PIZZA_CREATE_SUCCESS:
            return {loading: false, success: true, menuItem: action.payload};
        case PIZZA_CREATE_FAIL:
            return {loading: false, error: action.payload};
        case PIZZA_CREATE_RESET:
            return {};
        default:
            return state;
    }
}

export const seafoodCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case SEAFOOD_CREATE_REQUEST:
            return {loading: true};
        case SEAFOOD_CREATE_SUCCESS:
            return {loading: false, success: true, menuItem: action.payload};
        case SEAFOOD_CREATE_FAIL:
            return {loading: false, error: action.payload};
        case SEAFOOD_CREATE_RESET:
            return {};
        default:
            return state;
    }
}

export const snackCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case SNACK_CREATE_REQUEST:
            return {loading: true};
        case SNACK_CREATE_SUCCESS:
            return {loading: false, success: true, menuItem: action.payload};
        case SNACK_CREATE_FAIL:
            return {loading: false, error: action.payload};
        case SNACK_CREATE_RESET:
            return {};
        default:
            return state;
    }
}

export const productUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_UPDATE_REQUEST:
            return {loading: true};
        case PRODUCT_UPDATE_SUCCESS:
            return {loading: false, success: true};
        case PRODUCT_UPDATE_FAIL:
            return {loading: false, error: action.payload};
        case PRODUCT_UPDATE_RESET:
            return{};
        default:
            return state;
    }
}

export const MenuItemDeleteReducer = ( state = {}, action) => {
    switch (action.type) {
        case MENUITEM_DELETE_REQUEST:
            return {loading: true};
        case MENUITEM_DELETE_SUCCESS:
            return {loading: false, success: true};
        case MENUITEM_DELETE_FAIL:
            return {loading: false, error: action.payload};
        case MENUITEM_DELETE_RESET:
            return {};
        default:
            return state;
    }
}