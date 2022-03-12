import React from 'react';
import user from "../assets/images/user.jpg";

function Profile() {
    return (
        <div className="profile">
            <div className="profile-picture">
                <img className="profile-picture-image"  src={user} alt="profile" />
            </div>
            <div className="profile-details">
                <p className="username">Butterflysly</p>
                <div className="details">
                    <p><strong>40</strong> posts</p>
                    <p><strong>283</strong> followers</p>
                    <p><strong>274</strong> following</p>
                </div>
                <p><strong>Kylie Jenner</strong></p>
                <p>The world through my lens</p>
            </div>
        </div>
    );
}

export default Profile;