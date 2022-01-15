import React from 'react';
import useAuth from '../hooks/useAut';

const Login = () => {
    const { signInWithGoogle, setUser } = useAuth();
     const handleGoogleLogin =()=>{
        signInWithGoogle()
        .then(res=>
            {
            setUser(res.user)

        })
        .then((err)=>console.log(err))

    }
    return (
        <div>
           <div className="container">
                <from>
                    <h2 className="my-5 text-info">Please Login</h2>
                    <input className="form-control  w-50 mx-auto" type="email"  name="" id="" placeholder="Email" required />
                    <br />
                    <input className="form-control w-50  mx-auto" type="password" name="" id="" placeholder="Password" required />
                    <br />
                   
                    <button  className="btn btn-primary px-5" >Please Login</button>
                    <br />
                </from>
                <button onClick={handleGoogleLogin} className="my-3 mx-auto btn bg-primary px-4"> Google LogIn</button>

                </div>
        </div>
    );
};

export default Login;