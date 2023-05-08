import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function MenuItemList(props) {
    const {menuItems, deleteMenu} = props;
    const navigate = useNavigate();
return (
    <>
    <table className="table table-hover mt-3 table-bordered text-center">
            <thead className="bg-dark text-white">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NAME</th>
                    <th scope="col">PRICE</th>
                    <th scope="col">DISCRIPTION</th>
                    <th scope="col">ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                {menuItems.map((menuitem) =>
                    <tr key={menuitem._id}>
                        <th scope="row">{menuitem._id}</th>
                        <td  className='table-menuname-col'>{menuitem.name}</td>
                        <td>{menuitem.price}</td>
                        <td className='menulist-table-text'>{menuitem.text}</td>
                        <td  className='table-action-col'>
                            <button 
                                className='btn btn-warning mx-1 text-white fw-semibold edit-btn' 
                                type='button'
                                onClick={() => {navigate(`/${menuitem.category}/${menuitem._id}/edit`)}}
                                title='edit'
                            ><i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button 
                                className='btn btn-danger mx-1 delete-btn' 
                                type='button' 
                                title='delete'
                                onClick={() => deleteMenu(menuitem)}
                            ><i class="fa-solid fa-trash-can"></i>
                            </button>
                        </td>
                    </tr>
                    )}
            </tbody>
    </table>
    </>
)
}
