import React from 'react';
import "./topBrands.css";
import { data } from '../constants';

const TopBrands = () => {
    return (
        <div className="top_brands">
            <div className="title_brand">
                <p>Top Brands</p>
            </div>
            <div className="brands_img">
                {data.brands.map((b) => (
                    <img src={b} alt="" />
                ))}
            </div>
        </div>
    );
}

export default TopBrands