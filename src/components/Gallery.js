import React from 'react';
import Pictures from "./Pictures";
import Profile from "./Profile";


function Gallery() {
    return (
        <div>
           
            <div className="gallery">
                <Profile />
                <Pictures />
            </div>
        </div>

    );
}

export default Gallery;