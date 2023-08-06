import React from 'react'

const ProfilePics = ({positionAndName,imgSrc,href,nickName}):JSX.Element => {
    
    return (
        <figure className="w-[300px] h-[300px] flex flex-col justify-center items-center">
            <img className="rounded-full w-[250px] h-[250px]" src={imgSrc} alt={`${positionAndName}`} />
            <figcaption className="text-xl p-3 italic">{positionAndName}<a href={href}>{` ${nickName}`}</a></figcaption>
        </figure>
    )

}

export default ProfilePics