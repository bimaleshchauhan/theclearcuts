import React from 'react';
import bannerlogo from '../../assets/img/home-banner.jpg';
const Banner = (props) =>{
    return(
        <div className="home-banner">
            <div className="banner">
                <img src={bannerlogo} alt="home banner" />
            </div>
            <div className="banner-search">
                <div className="banner-tetx"></div>
                <div className="search">
                    <input type="search" placeholder="search" /><input type="button" value="Search" />
                </div>
            </div>
        </div>
    )
}

export default Banner