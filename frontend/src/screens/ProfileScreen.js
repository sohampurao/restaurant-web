import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { detailsUser, updateUserProfile } from '../actions/userActions';
import '../assets/css/forms.css';
import '../assets/css/base.css';
import Preloader from '../components/Preloader';
import MessageBox from '../components/MessageBox';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

export default function ProfileScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const userDetails = useSelector((state) => state.userDetails);
    const {loading, error, user} = userDetails;

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const {success: successUpdate, loading:loadingUpdate, error:errorUpdate} = userUpdateProfile;

    const dispatch = useDispatch();
    useEffect(() => {
        if(!user) {
            dispatch({type: USER_UPDATE_PROFILE_RESET});
            dispatch(detailsUser(userInfo._id));
        } else {
            setName(user.name);
            setEmail(user.email);
        }
    }, [dispatch, userInfo, user])

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Confirm Password Does Not Matched!!')
        } else {
            dispatch(updateUserProfile({userId : user._id, name, email, password}));
        }
    } 
return (
    <main className="container-fluid">
        <div className="main-content mx-auto my-3 form-container px-2 pt-2 pb-4">
            <form className='form' onSubmit={submitHandler}>
                <div className="fs-5 fw-semibold text-capitalize p-2">User Profile</div>
                {
                loading? <Preloader class='menu-preloader'/>
                : 
                error ? <MessageBox variant="danger">{error}</MessageBox>
                :
                <>
                {loadingUpdate && <Preloader class='menu-preloader'/>}
                {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
                {successUpdate && <MessageBox variant="success">Profile Updated Successfully!</MessageBox>}
                    <section className="my-sm-2 p-2">
                        <label for="name" className="form-label form-input-label mb-2 text-capitalize">name</label>
                        <input type="text" className="form-control" id="name" value={name} onChange={(e) => {setName(e.target.value)}} placeholder="Enter name" required/>
                    </section>
                    <section className="my-2 p-2">
                        <label for="email" className="form-label form-input-label mb-2 text-capitalize">Email</label>
                        <input type="email" className="form-control" id="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="name@example.com" required/>
                    </section>
                    <section className="my-2 p-2">
                        <label for="password" className="form-label form-input-label mb-2 text-capitalize">password</label>
                        <input type="password" className="form-control" id="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter password"/>
                    </section>
                    <section className="my-2 p-2">
                        <label for="confirm-password" className="form-label form-input-label mb-2 text-capitalize">confirm password</label>
                        <input type="password" className="form-control" id="confirm-password" onChange={(e) => {setConfirmPassword(e.target.value)}} placeholder="Enter confirm password"/>
                    </section>
                    <footer className="d-flex justify-content-center align-items-center mt-4 flex-column">
                        <button type="submit" className="btn btn-primary form-submit-btn text-capitalize">update</button>
                    </footer>
                </>
                }
                
            </form>
        </div>
    </main>
)
}
