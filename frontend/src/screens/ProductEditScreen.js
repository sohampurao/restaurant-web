import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Productdetailsaction, updateProduct } from '../actions/menuItemsActions';
import MessageBox from '../components/MessageBox';
import Preloader from '../components/Preloader';
import { PRODUCT_UPDATE_RESET} from '../constants/menItemsConstant';
import '../assets/css/forms.css';
import '../assets/css/base.css';
import  Axios from 'axios';

export default function ProductEditScreen() {
const navigate = useNavigate();
const {category: productCategory, id: productId} = useParams();
const [name, setName] = useState('');
const [price, setPrice] = useState('');
const [text, setText] = useState('');
const [image, setImage] = useState('');

const ProductDetails = useSelector( state => state.ProductDetails);
const {error, loading, product} = ProductDetails;

const productUpdate = useSelector((state) => state.productUpdate);
const {loading: loadingUpdate, error: errorUpdate, success: successUpdate} = productUpdate;

const dispatch = useDispatch();
useEffect(() => {
    if (successUpdate) {
        navigate(`/${productCategory}list`)
    }
    if(!product || (product._id !== productId || successUpdate)) {
        dispatch({type: PRODUCT_UPDATE_RESET});
        dispatch(Productdetailsaction(productCategory, productId))
    } else {
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setText(product.text);
    }
}, [product, dispatch, productId, productCategory,navigate,successUpdate])

const submitHandler = (e) => {
    e.preventDefault()

    dispatch(
        updateProduct({
            _id: productId,
            category: productCategory,
            name,
            price,
            image,
            text
        })
    )
}
const [loadingUpload, setLoadingUpload] = useState(false);
const [errorUpload, setErrorUpload] = useState('')

const userSignin = useSelector(state => state.userSignin);
const {userInfo} = userSignin;
const uploadFileHandler =async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
        const {data} = await Axios.post('/api/uploads', bodyFormData, {
        headers: {
        'Content-type': 'multipart/form-data',
        Authorization: `Bearer ${userInfo.token}`,
        },
    });
    setImage(data);
    setLoadingUpload(false);
    } catch (error) {
        setErrorUpload(error.message);
        setLoadingUpload(false);
    }
};
return (
<>
<main className="container-fluid">
        <div className="main-content mx-auto my-3 form-container px-2 pt-2 pb-4">
            <form className='form' onSubmit={submitHandler}>

                <div className="fs-5 fw-semibold text-capitalize p-2">Edit Item: <span className='fs-6 bg-dark text-white p-1 px-2 rounded-2'>{productId}</span></div>
                {loadingUpdate && <Preloader class='menu-preloader'></Preloader>}
                {errorUpdate && <MessageBox variant='danger'>{errorUpdate}</MessageBox>}
                {
                loading
                ? <Preloader class='menu-preloader'></Preloader>
                : 
                error 
                ? <MessageBox variant='danger'>{error}</MessageBox>
                : (
                <>
                    <section className='my-1' >
                        <img src={image} alt={name} className="img-fluid productedit-image mx-auto d-block rounded-4"/>
                    </section>
                    <section className="my-sm-2 p-2">
                        <label for="name" className="form-label form-input-label mb-2 text-capitalize">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter Name" value={name} 
                        onChange={(e) => setName(e.target.value)} required/>
                    </section>

                    <section className="my-sm-2 p-2">
                        <label for="price" className="form-label form-input-label mb-2 text-capitalize">Price</label>
                        <input type="text" className="form-control" id="price" title='Enter price in numberic format maximum "5 units"' maxLength='5' placeholder="Enter Price" value={price} 
                        onChange={(e) => setPrice(e.target.value)} required/>
                    </section>

                    <section className="my-sm-2 p-2">
                        <label for="image" className="form-label form-input-label mb-2 text-capitalize">Image Path</label>
                        <input type="text" className="form-control" id="image"  placeholder="Enter Image" value={image}
                        onChange={(e) => setImage(e.target.value)} readOnly disabled/>
                    </section>

                    <section className="my-sm-2 p-2">
                        <label for="imageFile" className="form-label form-input-label mb-2 text-capitalize">Image File</label>
                        <input type="file" className="form-control" id="imageFile"  placeholder="Choose Image"
                        onChange={uploadFileHandler}/>
                    </section>
                    {loadingUpload && <Preloader class='menu-preloader'/>}
                    {errorUpload && <MessageBox variant='danger'>{errorUpload}</MessageBox>}
                    <section className="my-sm-2 p-2">
                        <label for="text" className="form-label form-input-label mb-2 text-capitalize">text</label>
                        <textarea type="text" rows='3' className="form-control" id="text"  placeholder="Enter Text" value={text}
                        onChange={(e) => setText(e.target.value)} required/>
                    </section>

                    <footer className="d-flex justify-content-center align-items-center mt-4 flex-column">
                        <button type="submit" className="btn btn-warning form-submit-btn fw-semibold text-light">Update</button>
                    </footer>
                </>
                )
                }
            </form>
        </div>
    </main>
</>
)
}
