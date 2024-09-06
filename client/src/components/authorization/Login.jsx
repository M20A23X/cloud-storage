import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import './authorization.css'
import Input from "../../utils/input";
import {login} from "../../actions/users";

/// Summary: login form
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    return (
        <div className='authorization'>
            <div className="authorization__header">Log In</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Enter your email..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Enter your password..."/>
            <button className="authorization__btn" onClick={() => dispatch(login(email, password))}>Sign In</button>
        </div>
    );
};

export default Login;