import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteOrder, listOrders } from '../actions/orderActions';
import MessageBox from '../components/MessageBox';
import Preloader from '../components/Preloader';
import { ORDER_DELETE_RESET } from '../constants/orderConstants';

export default function OrderListScreen() {
    const navigate = useNavigate()

    const orderList = useSelector((state) => state.orderList);
    const { loading, error, orders } = orderList;

    const orderDelete = useSelector(state => state.orderDelete);
    const {loading: loadingDelete, error: errorDelete, success: successDelete} = orderDelete;

    const dispatch = useDispatch();
    useEffect(() => {
    dispatch({type: ORDER_DELETE_RESET})
    dispatch(listOrders());
    }, [dispatch, successDelete]);

    const deleteHandler = (order) => {
        if(window.confirm(`Are you sure to delete ${order.createdAt.substring(0, 10)} ${order.user.name}:${' '}${order._id}?`)) {
            dispatch(deleteOrder(order._id));
        }
    };
return (
    <>
        <div className="container-fluid  overflow-scroll table-container">
            <div className='fs-4 fw-semibold text-capitalized py-3 px-1'>Orders</div>
            {loadingDelete && <Preloader class='menu-preloader'></Preloader>}
            {errorDelete && <MessageBox variant='danger'>{errorDelete}</MessageBox>}
            {loading
                ?<Preloader class='menu-preloader'/>
                : error
                ? <MessageBox variant='danger'>{error}</MessageBox>
                :
                (
                    <table className="table table-hover mt-3 table-bordered text-center">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">USER</th>
                                <th scope="col">DATE</th>
                                <th scope="col">TOTAL</th>
                                <th scope="col">Paid</th>
                                <th scope="col">DELIVERED</th>
                                <th scope="col">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) =>
                            <tr key={order._id}>
                                <th scope="row">{order._id}</th>
                                <th>{order.user.name}</th>
                                <td className='table-date-col'>{order.createdAt.substring(0, 10)}</td>
                                <td>{order.totalPrice}</td>
                                <td className='table-paid-col'>{order.isPaid? order.paidAt.substring(0, 10): 'Not Paid'}</td>
                                <td>{order.isDelivered? order.deliveredAt.substring(0, 10): 'Not Delivered'}</td>
                                <td className='table-action-col'>
                                    <button 
                                    className='btn btn-primary' 
                                    type='button' 
                                    onClick={() => {navigate(`/order/${order._id}`)}}
                                    >Details
                                    </button>
                                    <button 
                                        className='btn btn-danger mx-1 delete-btn' 
                                        type='button' 
                                        title='delete'
                                        onClick={() => deleteHandler(order)}
                                    ><i class="fa-solid fa-trash-can"></i>
                                    </button>
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                )
            }
        </div>
    </>
)
}
