import React from 'react';
import {useDispatch} from "react-redux";
import {deleteAvatar, uploadAvatar} from "../../actions/users";

/// Summary: profile view
const Profile = () => {
    const dispatch = useDispatch()

    /// Summary: uploads a new profile avatar
    function changeHandler(e) {
        const file = e.target.files[0]
        dispatch(uploadAvatar(file))
    }

    return (
        <div>
            <button onClick={() => dispatch(deleteAvatar())}>Delete avatar</button>
            <input accept="image/*" onChange={e => changeHandler(e)} type="file" placeholder="Upload avatar"/>
        </div>
    );
};

export default Profile;
