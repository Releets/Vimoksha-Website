import React, {useState} from 'react';

export default function LargeBannerImage(props){
    return <div className='bannerimg-container'>
       <img className="pic" src={props.image}></img>
    </div>
}