import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    if (user) {
        navigate('/home')
    }
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('your two password did not match')
        }
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div>
            <h2 className='text-primary text-center'> please Register</h2>
            <div className='container w-50 mx-auto'>
                <Form onSubmit={handleCreateUser}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder="confirmPassword" required />
                    </Form.Group>
                    <p style={{ color: "red" }}>{error}</p>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <p>Already have an account?<Link className='text-primary text-decoration-none' to='/login'>please Login!!</Link></p>
            </div>
        </div>
    );
};

export default Register;