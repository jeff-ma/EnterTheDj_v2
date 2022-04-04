import React from "react";
import defaultProfile from "../../../../images/default-profile.jpg";
import { Cookies } from "react-cookie";
import "./profile.scss";

const Profile: React.FC = () => {
    const cookies = new Cookies();
    const accessToken : string | undefined = cookies.get("access_token");
    if (accessToken) {
        const image : string = cookies.get("image_url") || defaultProfile;
        return (
            <img id="profile" src={image} alt="profile"/>
        );
    } else {
        return null;
    }
};

export default Profile;