import Axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_MENTHOD, CART_SAVE_SHIPPING_ADDRESS } from "../constants/Cartconstant";

export const addToCart = (productCat, productId, qty) => async (dispatch, getState) => {
    const {data} = await Axios.get(`/api/${productCat}/${productId}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product : data._id,
            category : data.category,
            name : data.name,
            image : data.image,
            price : data.price,
            text : data.text,
            qty,  
        },
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().Cart.cartItems));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({type: CART_REMOVE_ITEM, payload: productId});
    localStorage.setItem('cartItems', JSON.stringify(getState().Cart.cartItems));
}

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({type: CART_SAVE_SHIPPING_ADDRESS, payload: data});
    localStorage.setItem('shippingAddress', JSON.stringify(data));
}

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_PAYMENT_MENTHOD, payload: data});
};