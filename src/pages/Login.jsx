import React from 'react'
import {auth, provider} from '../firebase-config';
import {signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
const Login = ({setIsAuth}) => {

  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
       localStorage.setItem('isAuth', true);
       setIsAuth(true);
       navigate('/');
    })
  }

  return (
    <div className='container'>
        <div className='card mt-5 text-center'>
          <div className="card-body py-5 bg-light">
            <p className='display-6 mt-3'>Login With Google</p>

            <button className='btn btn-primary' onClick={signInWithGoogle}>
              Google
            </button>
          </div>
        </div>
    </div>
  )
}

export default Login