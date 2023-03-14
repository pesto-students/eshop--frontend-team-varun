import React from 'react';
import "./services.css";

const Services = () => {
    return (
        <div className="row-grid">
            <div
                className="card-1"
                style={{
                    background: "linear-gradient(90deg, #BF5AE0 0%, #A811DA 100%)",
                }}
            >
                <div className="pp-icon">
                    <img src="../assets/pp.svg" alt="" />
                    <h4>Popular Products</h4>
                </div>
                <p>Get the popular product now</p>
            </div>
            <div
                className="card-2"
                style={{
                    background: "linear-gradient(90deg, #06BEB6 0%, #48B1BF 100%)",
                }}
            >
                <div className="pp-icon">
                    <img src="../assets/truck-fast.svg" alt="" />
                    <h4>Free Shapping</h4>
                </div>
                <p>No charge for each delivery</p>
            </div>
            <div
                className="card-3"
                style={{
                    background: "linear-gradient(90deg, #F85032 0%, #E73827 100%)",
                }}
            >
                <div className="pp-icon">
                    <img src="../assets/wallet.svg" alt="" />
                    <h4>Quick Payment</h4>
                </div>
                <p>100% secure payment</p>
            </div>
            <div
                className="card-4"
                style={{
                    background: "linear-gradient(90deg, #FE8C00 0%, #F83600 100%)",
                }}
            >
                <div className="pp-icon">
                    <img src="../assets/wishlist.svg" alt="" />
                    <h4>Bestseller</h4>
                </div>
                <p>Quick support</p>
            </div>
        </div>
        
    )
}

export default Services