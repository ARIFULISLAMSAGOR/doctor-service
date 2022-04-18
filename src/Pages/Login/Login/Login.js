import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendEmailVerification, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const location = useLocation();
    const from = location.state?.from?.pathnam || '/home';

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async (event) => {
        const email = setEmail(event.target.value);
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email')
        }
    }

    return (
        <div>
            <h2 className='text-primary text-center'> please Login</h2>
            <div className='container w-50 mx-auto'>
                <Form onSubmit={handleUserSignIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                    </Form.Group>
                    <p style={{ color: "red" }}>{error?.message}</p>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <p>New to Doctor service?<Link className='text-primary text-decoration-none' to='/register'>please Register!!</Link></p>
                <p>Forget password?<button onClick={resetPassword} className=' btn btn-link text-primary text-decoration-none pe-auto'>Reset password!!</button></p>
                <GoogleLogin></GoogleLogin>
                <ToastContainer />
            </div>

        </div>
    );
};

export default Login;