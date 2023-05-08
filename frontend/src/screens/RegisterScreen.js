import React, { useEffect, useState } from 'react';
import '../assets/css/forms.css';
import '../assets/css/base.css';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import Preloader from '../components/Preloader';
import MessageBox from '../components/MessageBox';

export default function RegisterScreen() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo, loading, error } = userRegister;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            alert('confirm password are not macthed')
        } else {
            dispatch(register(name, email, password))
        }
    };

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, redirect, userInfo]);
return (
    <main className="container-fluid">
        <div className="main-content mx-auto my-3 form-container px-2 pt-2 pb-4">
            <form className='form' onSubmit={submitHandler}>
                <div className="fs-5 fw-semibold text-capitalize p-2">Create Account</div>
                {loading && <Preloader class='menu-preloader'></Preloader>}
                {error && <MessageBox>{error}</MessageBox>}
                <section className="my-sm-2 p-2">
                    <label for="name" className="form-label form-input-label mb-2 text-capitalize">name</label>
                    <input type="text" className="form-control" id="name" onChange={(e) => {setName(e.target.value)}} placeholder="Enter name" required/>
                </section>
                <section className="my-2 p-2">
                    <label for="email" className="form-label form-input-label mb-2 text-capitalize">Email address</label>
                    <input type="email" className="form-control" id="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="name@example.com" required/>
                </section>
                <section className="my-2 p-2">
                    <label for="password" className="form-label form-input-label mb-2 text-capitalize">password</label>
                    <input type="password" className="form-control" id="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter password" required/>
                </section>
                <section className="my-2 p-2">
                    <label for="confirm-password" className="form-label form-input-label mb-2 text-capitalize">confirm password</label>
                    <input type="password" className="form-control" id="confirm-password" onChange={(e) => {setConfirmPassword(e.target.value)}} placeholder="Enter confirm password" required/>
                </section>
                <footer className="d-flex justify-content-center align-items-center mt-4 flex-column">
                    <button type="submit" className="btn btn-primary form-submit-btn text-capitalize">sign-up</button>
                    <div className="old-costumer mt-2 text-capitalize">
                        Already have an account?  
                        <Link to={`/signin?redirect=${redirect}`}>
                            <span className="new-account"> Go for sign-in</span>
                        </Link>
                    </div>
                </footer>
            </form>
        </div>
    </main>
)
}
