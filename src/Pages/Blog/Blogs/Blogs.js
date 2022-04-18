import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h1 className='text-center mt-30px'>Ans to the question no. 1</h1>
                <p style={{ margin: '20px' }}>1.	In authentication process, the identity of users are checked for providing the access to the system.While in authorization process, person’s or user’s authorities are checked for accessing the resources. <br />
                    2.In authentication process, users or persons are verified.While in authorization process, users or persons are validated. <br />
                    P     3.Authentication is done before the authorization process.While authorization  process is done after the authentication process. <br />
                    4.	Authentication needs usually user’s login details.	While authorization needs user’s privilege or security levels.
                    5.	Authentication determines whether the person is user or not.While authorization determines What permission do user have?
                </p>
            </div>
            <div>
                <h1 className='text-center'>Ans to the question no.2 </h1>
                <p style={{ margin: '20px' }}>Firebase is used for many purposes that can help our apps to develop, grow and make it a quality app.Major uses of firebase firstly :Analytics,Firebase Analytics is a product that I think every scale, type, kind of developer must use.It gives such an in-depth view of our product that can help us grow and make our marketing strategies. And that is totally free.secondly:Remote config,Firebase Remote Config lets us do the A/B testing, provide a personalized experience and much more, totally depends on how we use it.Database:Firebase Database is something we can call super amazing! It provides two types of database to us.etc. <br />
                    Authentication is the process of identifying users and validating who they claim to be. One of the most common and apparent factors to authenticate identity is a password.Types of Authentication Options.Token Authentication. A token can be defined as a digitally encoded signature used to authenticate and authorize a user to access specific resources on a network.Standard Authentication. Multi-Factor Authentication (MFA) .Passwordless Authentication. Social Authentication.</p>
            </div>
            <div>
                <h1 className='text-center'>Ans to the question no.3 </h1>
                <p style={{ margin: '20px' }}>
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to our app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.Firebase SDK authentication Email and password based authentication,Federated identity provider integration,Phone number authentication,Custom auth system integration,Anonymous auth.Implementation paths:	Set up sign-in methods,	Customize the sign-in UI,Use FirebaseUI to perform the sign-in flow, The list below reviews some common authentication methods used to secure modern systems.Password-based authentication,. Multi-factor authenticatio,Certificate-based authentication, Biometric authentication,Token-based authentication
                </p>
            </div>
        </div>
    );
};

export default Blogs;