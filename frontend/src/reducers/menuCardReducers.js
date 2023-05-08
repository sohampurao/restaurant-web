import { HOMEMENU_CARD_FAIL, HOMEMENU_CARD_REQUEST, HOMEMENU_CARD_SUCCESS, MENUPAGE_CARD_FAIL, MENUPAGE_CARD_REQUEST, MENUPAGE_CARD_SUCCESS } from "../constants/menuCardConstant";

export const HomeMenuCardReducer =(state = {loading : true, homecards: []}, action) => {
    switch(action.type) {
        case HOMEMENU_CARD_REQUEST :
            return {loading: true};
        case HOMEMENU_CARD_SUCCESS :
            return {loading: false, homecards: action.payload};
        case HOMEMENU_CARD_FAIL :
            return{loading: false, error: action.payload}
        default :
            return state
    }
}

export const MenuPageCardReducer = (state = {loading :true, menucards: []}, action) => {
    switch(action.type) {
        case MENUPAGE_CARD_REQUEST :
            return {loading : true};
        case MENUPAGE_CARD_SUCCESS :
            return{loading : false,  menucards : action.payload};
        case MENUPAGE_CARD_FAIL: 
            return{loading: false, error: action.payload}
        default :
            return state;
    }
}