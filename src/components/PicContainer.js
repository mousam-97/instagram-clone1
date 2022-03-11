import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

function PicContainer({id,img,likes,comments}) {
    // const {img,likes,comments} = props.item;
    return (
        <div className="pic-container">
            <img src={img} alt="item" />
            <div className="hide">
                <ul>
                    <li><FavoriteIcon fontSize="small"/>{likes}</li>
                    <li><ModeCommentIcon fontSize="small"/>{comments}</li>
                </ul>

            </div>
        </div>
    );
}

export default PicContainer;