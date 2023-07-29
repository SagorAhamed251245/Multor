import Image from 'next/image';
import React from 'react';
import image1 from '../../../assets/part-blurry-image.png'

const ProfilePage = () => {
    return (
        <div>
            <h1>This is profile</h1>
            <Image width={1200} src={image1} alt='' placeholder=''></Image>
           
        </div>
    );
};

export default ProfilePage;