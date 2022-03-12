import React from 'react';
import { useSelector } from "react-redux";
import NewsfeedPic from "./NewsfeedPic";

function Newsfeed() {
    const imageList = useSelector((state) => state.photos.items);
    console.log(imageList);
    const renderList = imageList.map((item) => {
        return <NewsfeedPic key={item.id} {...item} />;
    });
    return (
        <div className="newsfeed">
            {renderList}
        </div>
    );
}

export default Newsfeed;