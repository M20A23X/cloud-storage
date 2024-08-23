import React, {useState} from 'react';
import './registration.css'
import Input from "../../utils/input";
import {registration} from "../../actions/users";

const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className='registration'>
            <div className="registration__header">Registration</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Enter your email..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Enter your password..."/>
            <button className="registration__btn" onClick={() => registration(email, password)}>Sign Up</button>
        </div>
    );
};

export default Registration;