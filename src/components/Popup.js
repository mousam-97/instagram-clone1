import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removeSelected, updateItem } from "../store/actions/photosActions";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


function Popup({ id, img, location, caption, likes }) {
    // const {id, img, location, caption, likes } = props.item;
    // const { id, img, likes, location, caption } = useSelector((state) => state.photos.selectedItem);

    const dispatch = useDispatch();
    function handleClick() {
        dispatch(removeSelected());
    }

    function handleLike() {
        dispatch(updateItem(id));
        console.log("clicked", id);
    }

    const handleDoubleClick = () => {
        dispatch(updateItem(id));
    };

    return (
        <div className="popup">
            <button onClick={handleClick}>X</button>
            <div className="popup__container">
                <div className="popup__image" onDoubleClick={handleDoubleClick}>
                    <img src={img} alt="pic1" />
                </div>
                <div className="popup__content">

                    <div className="popup__header">
                        <div className="userimage">
                            <img src={require("../assets/images/user.jpg")} alt="pic1" />
                        </div>
                        {/* <p><strong>username</strong></p>
                        <p>location</p> */}
                        <ul>
                            <li><strong>Butterflysly</strong></li>
                            <li>{location}</li>
                        </ul>
                    </div>

                    <div className="popup__caption">
                        <p><strong>Butterflysly</strong></p>
                        <p>{caption}</p>
                    </div>

                    <div >
                        <FavoriteBorderOutlinedIcon className="icons" onClick={handleLike} />
                        <ModeCommentOutlinedIcon className="icons" />
                        <SendOutlinedIcon className="icons" />
                    </div>
                    <div className="popup__footer">

                        <div className="friend-image">
                            <img src={require("../assets/images/user.jpg")} alt="pic1" />
                        </div>
                        <p>liked by <strong>xyz</strong> and <strong>{likes} others</strong></p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Popup;