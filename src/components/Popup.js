import React from 'react';

function Popup(props) {
    const {img,location,caption,likes} = props.item;
    return (
        <div className="popup">
            <div className="popup__container">
                <div className="popup__image">
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
                            <li><strong>username</strong></li>
                            <li>{location}</li>
                        </ul>
                    </div>

                    <div className="popup__caption">
                        <p><strong>username</strong></p>
                        <p>{caption}</p>
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