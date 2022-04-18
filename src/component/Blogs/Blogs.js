import React from 'react';

const Blogs = () => {
    return (
        <div>
            <p>Question: Difference between authorization and authentication.</p>
            Answer: Authentication is a process through which we can or a site can determine who the person is whether he can log in or not. Authentication works only with the identity of the person. Where authorization decide who the person is and what he can do. Means the person has any specific right or permission to view or edit or access to any specific file or component. Authorization is the process after authentication. 
            <br />
            Question: Why are you using firebase? What other options do you have to implement authentication?
            Answer: Firebase authentication system is kind of system through which we can easily use an authentication system. We can easily check the authenticity of a use by using firebase authentication. It is free so we can freely use it. There are some alternative of firebase authentication. such as Back4app, parse, AWS amplify, Backendless, Kuzzle and etc. 
            <br />

            Question: What other services does firebase provide other than authentication?
            Answer: Firebase authentication is a system through which we can check user authenticity. Besides authentication it does some other thing. We can host our site to firebase. It also provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. We can use email, password, other social media authentication through firebase authentication. 


        </div>
    );
};

export default Blogs;