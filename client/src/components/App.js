import React, {useEffect} from 'react';
import Navbar from "./navbar/Navbar";
import './app.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Registration from "./authorization/Registration";
import Login from "./authorization/Login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../actions/users";
import Disk from "./disk/Disk";

function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(auth())
    }, [dispatch])

    return (
        <BrowserRouter>
            <div className='app'>
                <Navbar/>
                <div className="wrap">
                    {!isAuth ?
                        <Routes>
                            <Route path="/registration" element={<Registration/>}/>
                            <Route path="/login" element={<Login/>}/>
                        </Routes>
                        :
                        <Routes>
                            <Route exact path="/" element={<Disk/>}/>
                            <Navigate to="/"/>
                        </Routes>
                    }
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;