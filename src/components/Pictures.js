import React from 'react';
// import photo1 from "../assets/images/photo1.jpeg";
// import photo2 from "../assets/images/photo2.jpeg";
// import photo3 from "../assets/images/photo3.jpeg";
// import photo4 from "../assets/images/photo4.jpeg";
// import photo5 from "../assets/images/photo5.jpeg";
// import photo6 from "../assets/images/photo6.jpeg";
import PicContainer from "./PicContainer";
import { useSelector } from "react-redux";

function Pictures() {

    const items = useSelector((state) => state.photos.items);

    const picturesList = items.map((item) => {
        return <PicContainer key={item.id} {...item} />
    });


    return (
        <div className="pictures">           
            {picturesList}           
        </div>
    );
}

export default Pictures;