import Axios  from "axios";
import { APPETIZER_CREATE_FAIL, APPETIZER_CREATE_REQUEST, APPETIZER_CREATE_SUCCESS, APPETIZER_MENU_FAIL, APPETIZER_MENU_REQUEST, APPETIZER_MENU_SUCCESS, BURGER_CREATE_FAIL, BURGER_CREATE_REQUEST, BURGER_CREATE_SUCCESS, BURGER_MENU_FAIL, BURGER_MENU_REQUEST, BURGER_MENU_SUCCESS, COCKTAIL_CREATE_FAIL, COCKTAIL_CREATE_REQUEST, COCKTAIL_CREATE_SUCCESS, COCKTAIL_MENU_FAIL, COCKTAIL_MENU_REQUEST, COCKTAIL_MENU_SUCCESS, DESSERT_CREATE_FAIL, DESSERT_CREATE_REQUEST, DESSERT_CREATE_SUCCESS, DESSERT_MENU_FAIL, DESSERT_MENU_REQUEST, DESSERT_MENU_SUCCESS, MAINMENU_CREATE_FAIL, MAINMENU_CREATE_REQUEST, MAINMENU_CREATE_SUCCESS, MAINMENU_MENU_FAIL, MAINMENU_MENU_REQUEST, MAINMENU_MENU_SUCCESS, MENUITEM_DELETE_FAIL, MENUITEM_DELETE_REQUEST, MENUITEM_DELETE_SUCCESS, PIZZA_CREATE_FAIL, PIZZA_CREATE_REQUEST, PIZZA_CREATE_SUCCESS, PIZZA_MENU_FAIL, PIZZA_MENU_REQUEST, PIZZA_MENU_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_UPDATE_FAIL, PRODUCT_UPDATE_REQUEST, PRODUCT_UPDATE_SUCCESS, SEAFOOD_CREATE_FAIL, SEAFOOD_CREATE_REQUEST, SEAFOOD_CREATE_SUCCESS, SEAFOOD_MENU_FAIL, SEAFOOD_MENU_REQUEST, SEAFOOD_MENU_SUCCESS, SNACKS_MENU_FAIL, SNACKS_MENU_REQUEST, SNACKS_MENU_SUCCESS, SNACK_CREATE_FAIL, SNACK_CREATE_REQUEST, SNACK_CREATE_SUCCESS } from "../constants/menItemsConstant";

export const SnacksMenuList = () => async(dispatch) => {
    dispatch({
        type: SNACKS_MENU_REQUEST
    })
    try {
        const { data } = await Axios.get('/api/snacks');
        dispatch({type: SNACKS_MENU_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: SNACKS_MENU_FAIL, payload: error.message})
    }
}

export const AppetizerMenuList = () => async(dispatch) => {
    dispatch({
        type: APPETIZER_MENU_REQUEST
    })
    try {
        const { data } = await Axios.get('/api/appetizer');
        dispatch({type: APPETIZER_MENU_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: APPETIZER_MENU_FAIL, payload: error.message})
    }
}

export const MainMenuList = () => async(dispatch) => {
    dispatch({
        type: MAINMENU_MENU_REQUEST
    })
    try {
        const { data } = await Axios.get('/api/mainmenu');
        dispatch({type: MAINMENU_MENU_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: MAINMENU_MENU_FAIL, payload: error.message})
    }
}

export const PizzaMenuList = () => async(dispatch) => {
    dispatch({
        type: PIZZA_MENU_REQUEST
    })
    try {
        const { data } = await Axios.get('/api/pizza');
        dispatch({type: PIZZA_MENU_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: PIZZA_MENU_FAIL, payload: error.message})
    }
}

export const DessertMenuList = () => async(dispatch) => {
    dispatch({
        type: DESSERT_MENU_REQUEST
    })
    try {
        const { data } = await Axios.get('/api/dessert');
        dispatch({type: DESSERT_MENU_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: DESSERT_MENU_FAIL, payload: error.message})
    }
}

export const BurgerMenuList = () => async(dispatch) => {
    dispatch({
        type: BURGER_MENU_REQUEST
    })
    try {
        const { data } = await Axios.get('/api/burger');
        dispatch({type: BURGER_MENU_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: BURGER_MENU_FAIL, payload: error.message})
    }
}

export const SeafoodMenuList = () => async(dispatch) => {
    dispatch({
        type: SEAFOOD_MENU_REQUEST
    })
    try {
        const { data } = await Axios.get('/api/seafood');
        dispatch({type: SEAFOOD_MENU_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: SEAFOOD_MENU_FAIL, payload: error.message})
    }
}

export const CocktailMenuList = () => async(dispatch) => {
    dispatch({
        type: COCKTAIL_MENU_REQUEST
    })
    try {
        const { data } = await Axios.get('/api/cocktail');
        dispatch({type: COCKTAIL_MENU_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: COCKTAIL_MENU_FAIL, payload: error.message})
    }
}

// for displaying products in prosduct details screen

export const Productdetailsaction = (category, productId) => async(dispatch) => {
    dispatch({type: PRODUCT_DETAILS_REQUEST, payload: productId});
    try{
        const {data} = await Axios.get(`/api/${category}/${productId}`);
        dispatch({type : PRODUCT_DETAILS_SUCCESS, payload: data});
    } catch(error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: 
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

// for creating a new product in frontend
export const createAppetizer = () => async (dispatch, getState) => {
    dispatch({type: APPETIZER_CREATE_REQUEST});
    const {
    userSignin: { userInfo },
    } = getState();
    try {
        const {data} = await Axios.post(
            '/api/appetizer',
            {},
            {
                headers : {Authorization : `Bearer ${userInfo.token}`},
            }
        );
        dispatch({
            type : APPETIZER_CREATE_SUCCESS,
            payload: data.menuItem,
        })
    } catch (error) {
        const message = 
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({type: APPETIZER_CREATE_FAIL, payload: message});
    }
}

export const createBurger = () => async (dispatch, getState) => {
    dispatch({type: BURGER_CREATE_REQUEST});
    const {
    userSignin: { userInfo },
    } = getState();
    try {
        const {data} = await Axios.post(
            '/api/burger',
            {},
            {
                headers : {Authorization : `Bearer ${userInfo.token}`},
            }
        );
        dispatch({
            type : BURGER_CREATE_SUCCESS,
            payload: data.menuItem,
        })
    } catch (error) {
        const message = 
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({type: BURGER_CREATE_FAIL, payload: message});
    }
}

export const createCocktail = () => async (dispatch, getState) => {
    dispatch({type: COCKTAIL_CREATE_REQUEST});
    const {
    userSignin: { userInfo },
    } = getState();
    try {
        const {data} = await Axios.post(
            '/api/cocktail',
            {},
            {
                headers : {Authorization : `Bearer ${userInfo.token}`},
            }
        );
        dispatch({
            type : COCKTAIL_CREATE_SUCCESS,
            payload: data.menuItem,
        })
    } catch (error) {
        const message = 
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({type: COCKTAIL_CREATE_FAIL, payload: message});
    }
}

export const createDessert = () => async (dispatch, getState) => {
    dispatch({type: DESSERT_CREATE_REQUEST});
    const {
    userSignin: { userInfo },
    } = getState();
    try {
        const {data} = await Axios.post(
            '/api/dessert',
            {},
            {
                headers : {Authorization : `Bearer ${userInfo.token}`},
            }
        );
        dispatch({
            type : DESSERT_CREATE_SUCCESS,
            payload: data.menuItem,
        })
    } catch (error) {
        const message = 
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({type: DESSERT_CREATE_FAIL, payload: message});
    }
}

export const createMainMenu = () => async (dispatch, getState) => {
    dispatch({type: MAINMENU_CREATE_REQUEST});
    const {
    userSignin: { userInfo },
    } = getState();
    try {
        const {data} = await Axios.post(
            '/api/mainmenu',
            {},
            {
                headers : {Authorization : `Bearer ${userInfo.token}`},
            }
        );
        dispatch({
            type : MAINMENU_CREATE_SUCCESS,
            payload: data.menuItem,
        })
    } catch (error) {
        const message = 
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({type: MAINMENU_CREATE_FAIL, payload: message});
    }
}

export const createPizza = () => async (dispatch, getState) => {
    dispatch({type: PIZZA_CREATE_REQUEST});
    const {
    userSignin: { userInfo },
    } = getState();
    try {
        const {data} = await Axios.post(
            '/api/pizza',
            {},
            {
                headers : {Authorization : `Bearer ${userInfo.token}`},
            }
        );
        dispatch({
            type : PIZZA_CREATE_SUCCESS,
            payload: data.menuItem,
        })
    } catch (error) {
        const message = 
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({type: PIZZA_CREATE_FAIL, payload: message});
    }
}

export const createSeafood = () => async (dispatch, getState) => {
    dispatch({type: SEAFOOD_CREATE_REQUEST});
    const {
    userSignin: { userInfo },
    } = getState();
    try {
        const {data} = await Axios.post(
            '/api/seafood',
            {},
            {
                headers : {Authorization : `Bearer ${userInfo.token}`},
            }
        );
        dispatch({
            type : SEAFOOD_CREATE_SUCCESS,
            payload: data.menuItem,
        })
    } catch (error) {
        const message = 
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({type: SEAFOOD_CREATE_FAIL, payload: message});
    }
}

export const createSnack = () => async (dispatch, getState) => {
    dispatch({type: SNACK_CREATE_REQUEST});
    const {
    userSignin: { userInfo },
    } = getState();
    try {
        const {data} = await Axios.post(
            '/api/snacks',
            {},
            {
                headers : {Authorization : `Bearer ${userInfo.token}`},
            }
        );
        dispatch({
            type : SNACK_CREATE_SUCCESS,
            payload: data.menuItem,
        })
    } catch (error) {
        const message = 
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({type: SNACK_CREATE_FAIL, payload: message});
    }
}

export const updateProduct = (product) => async (dispatch, getState) => {
    dispatch({type: PRODUCT_UPDATE_REQUEST, payload: product});
    const {
        userSignin: {userInfo},
    } = getState();
    try {
        const {data} = await Axios.put(`/api/${product.category}/${product._id}`, product, {
            headers: { Authorization: `Bearer ${userInfo.token}`},
        });
        dispatch({type: PRODUCT_UPDATE_SUCCESS, payload: data});
    } catch (error) {
        const message = 
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({type: PRODUCT_UPDATE_FAIL, error: message})
    }
}

export const deleteMenuItem = (menuItemCat, menuItemID) => async (dispatch, getState) => {
    dispatch({type: MENUITEM_DELETE_REQUEST, payload: menuItemID});
    const {
        userSignin: {userInfo},
    } = getState();
    try {
            await Axios.delete(`/api/${menuItemCat}/${menuItemID}`, {
            headers: { Authorization: `Bearer ${userInfo.token}`},
        });
        dispatch({type: MENUITEM_DELETE_SUCCESS});
    } catch (error) {
        const message = 
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({type: MENUITEM_DELETE_FAIL, payload: message})
    }
}