import React, { useEffect, useState } from 'react';
import '../assets/css/forms.css';
import '../assets/css/base.css';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../actions/userActions';
import Preloader from '../components/Preloader';


export default function SigninScreen() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password))
    };

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, redirect, userInfo]);

return (
    <main className="container-fluid">
        <div className="main-content mx-auto my-3 signin-container form-container px-2 pt-2">
            <form className='form' onSubmit={submitHandler}>
                <div className="fs-5 fw-semibold text-capitalize p-2">Sign-in</div>

                {loading && <Preloader class="menu-preloader"/>}

                <section className="my-sm-2 my-1 p-2">
                    <label htmlFor="email" className="form-label form-input-label mb-2 text-capitalize">Email address</label>
                    <input type="email" id="email" className={`form-control signin-email-input ${error && 'is-invalid'}`} placeholder="name@example.com" required
                    onChange={(e) => setEmail(e.target.value)}/>
                </section>

                <section className="my-sm-2 my-1 p-2">
                    <label htmlFor="password" className="form-label form-input-label mb-2 text-capitalize">password</label>
                    <input type="password" className={`form-control ${error && 'is-invalid'}`} id="password" placeholder="Enter your password" required
                    onChange={(e) => setPassword(e.target.value)}/>
                    <div id="validationServerUsernameFeedback" className="invalid-feedback">
                        {error}
                    </div>
                </section>

                <footer className="d-flex justify-content-center align-items-center mt-sm-4 mt-3 flex-column">
                    <button type="submit" className="btn btn-primary form-submit-btn text-capitalize">sign-in</button>
                    <div className="new-costumer mt-2 text-capitalize">
                        new costumer? 
                        <Link to={`/register?redirect=${redirect}`}>
                            <span className="new-account"> create new account.</span>
                        </Link>
                    </div>
                </footer>
            </form>
        </div>
    </main>
)
}
