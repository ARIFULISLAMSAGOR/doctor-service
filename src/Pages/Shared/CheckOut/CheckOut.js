import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const CheckOut = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div>
            <h2 className='text-center'>This is checkout</h2>
            <p className='text-center'>Current user email: {user ? user.email : "No body"}</p>
        </div>
    );
};

export default CheckOut;