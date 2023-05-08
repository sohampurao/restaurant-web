import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Preloader from '../components/Preloader';
import MessageBox from '../components/MessageBox';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import { listOrderMine } from '../actions/orderActions';
import '../assets/css/base.css'



export default function OrderHistoryScreen() {
    const navigate = useNavigate();
    const orderMineList = useSelector((state) => state.orderMineList);
    const {loading, error, orders} = orderMineList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listOrderMine())
    }, [dispatch])
return (
    <>
    <div className="container-fluid  overflow-scroll table-container">
        <div className='fs-4 fw-semibold text-capitalized py-3 px-1'>Order History</div>
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
                            <td className='table-date-col'>{order.createdAt.substring(0, 10)}</td>
                            <td >{order.totalPrice}</td>
                            <td className='table-paid-col'>{order.isPaid? order.paidAt.substring(0, 10): 'Not Paid'}</td>
                            <td>{order.isDelivered? order.deliveredAt.substring(0, 10): 'Not Delivered'}</td>
                            <td>
                                <button 
                                className='btn btn-primary' 
                                type='button' 
                                onClick={() => {navigate(`/order/${order._id}`)}}
                                >Details
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
