import React, {useState} from 'react';
import Input from "../../utils/input";
import {useDispatch, useSelector} from "react-redux";
import {setPopupDisplay} from "../../reducers/fileReducer";
import {createDir} from "../../actions/file";

/// Summary: popup
const Popup = () => {
    const [dirName, setDirName] = useState('')
    const popupDisplay = useSelector(state => state.files.popupDisplay)
    const currentDir = useSelector(state => state.files.currentDir)
    const dispatch = useDispatch()

    /// Summary: creates a new dir
    function createHandler() {
        dispatch(createDir(currentDir, dirName))
    }

    return (
        <div className="popup" onClick={() => dispatch(setPopupDisplay('none'))} style={{display: popupDisplay}}>
            <div className="popup__content" onClick={(event => event.stopPropagation())}>
                <div className="popup__header">
                    <div className="popup__title">Create dir</div>
                    <button className="popup__close" onClick={() => dispatch(setPopupDisplay('none'))}>X</button>
                </div>
                <Input type="text" placeholder="Dir name..." value={dirName} setValue={setDirName}/>
                <button className="popup__create" onClick={() => createHandler()}>Create</button>
            </div>
        </div>
    );
};

export default Popup;