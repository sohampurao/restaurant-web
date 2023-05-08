import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppetizerMenuList, createAppetizer, deleteMenuItem } from '../../actions/menuItemsActions';
import MessageBox from '../../components/MessageBox';
import Preloader from '../../components/Preloader';
import '../../assets/css/base.css'
import { APPETIZER_CREATE_RESET, MENUITEM_DELETE_RESET } from '../../constants/menItemsConstant';
import MenuItemList from '../../components/MenuItemList';

export default function AppetizerListScreen() {
    const navigate = useNavigate()

    const appetizerMenuList = useSelector((state) => state.appetizerMenuList);
    var {loading, error, appetizermenu} = appetizerMenuList;

    const appetizerCreate = useSelector((state) => state.appetizerCreate);
    const {
        loading: loadingCreate, 
        success: successCreate, 
        error: errorCreate, 
        menuItem: createdMenuItem
    } = appetizerCreate;

    const menuItemDelete = useSelector((state) => state.menuItemDelete);
    const {
        loading: loadingDelete, 
        success: successDelete, 
        error: errorDelete
    } = menuItemDelete;

    const dispatch = useDispatch();
    useEffect(() => {
        if(successCreate) {
            dispatch({type: APPETIZER_CREATE_RESET});
            navigate(`/appetizer/${createdMenuItem._id}/edit`);
        }
        if (successDelete) {
            dispatch({type: MENUITEM_DELETE_RESET})
        }
        dispatch(AppetizerMenuList())
    }, [dispatch, successCreate, navigate, createdMenuItem, successDelete])

    const deleteHandler = (menuitem) => {
        if(window.confirm(`Are you sure to delete "${menuitem.name}" ?`)) {
            dispatch(deleteMenuItem(menuitem.category,menuitem._id))
        }
    }

    const createHandler = () => {
        dispatch(createAppetizer());
    }
return (
    <>
    <div className="container-fluid table-container overflow-scroll">
        <div className="d-flex align-items-center">
            <div className='fs-4 fw-semibold text-capitalized py-3 px-1 me-auto'>Appetizer's Menu</div>
            <button type='button' className='btn btn-primary ms-auto text-capitalize' onClick={createHandler}>
                Create
            </button>
        </div>
        {loadingDelete && <Preloader class='menu-preloader'></Preloader>}
        {errorDelete && <MessageBox>{errorDelete}</MessageBox>}
        {loadingCreate && <Preloader class='menu-preloader'></Preloader>}
        {errorCreate && <MessageBox>{errorCreate}</MessageBox>}
        {loading 
        ? <Preloader class="menu-preloader"></Preloader>
        : error
        ? <MessageBox variant='danger'>{error}</MessageBox>
        : (
        <MenuItemList menuItems={appetizermenu} deleteMenu={deleteHandler}/>
        )}
    </div>
    </>
)
}
