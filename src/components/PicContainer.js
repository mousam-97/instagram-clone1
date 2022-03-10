import React from 'react';


function PicContainer(props) {
    return (
        <div className="pic-container">
            <img src={props.img} alt="item" />
            <div className="hide">
                <p>26</p>
                <p>24</p>
            </div>
        </div>
    );
}

export default PicContainer;