import React from 'react';
import { Link } from "react-router-dom";
import user from "../assets/images/user.jpg";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { useDispatch } from "react-redux";
import { updateItem } from "../store/actions/photosActions";

function NewsfeedPic({ id, img, likes, comments, caption }) {
    const dispatch = useDispatch();
    function handleLike() {
        dispatch(updateItem(id));
    }

    const handleDoubleClick = () => {
        dispatch(updateItem(id));
    }

    return (
        <div className="newsfeed-pic">
            <div className="newsfeed-pic__user">
                <img src={user} alt="user" />
                <Link to="profile" className="profileLink">
                    <p><strong>Butterflysly</strong></p>
                </Link>

            </div>
            <div className="imgcontainer" onDoubleClick={handleDoubleClick}>
                <img src={img} alt="pic" />
            </div>

            <div className="newsfeed-pic__details">
                <div >
                    <FavoriteBorderOutlinedIcon className="icons" onClick={handleLike}/>
                    <ModeCommentOutlinedIcon className="icons"/>
                    <SendOutlinedIcon className="icons"/>
                </div>

                <p>liked by <strong>xyz</strong> and <strong>{likes}</strong> others</p>
                <p>{caption}</p>
            </div>


        </div>
    );
}

export default NewsfeedPic;