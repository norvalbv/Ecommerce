import React from 'react'
import image from '../../files/slide-1.jpg';
import './shopitems.scss';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default function ShopItems() {
    return (
        <div className="shopitems">
            <div className="itemContainer">
                <img src={image} alt="#" className="item-image"/>
                <div className="overlay">
                    <SearchIcon fontSize="large" className="icon"/>
                    <button>View Similar</button>
                    <ShoppingBasketIcon fontSize="large" className="icon"/>
                </div>
            </div>
            <div className="itemContainer">
                <img src={image} alt="#" className="item-image"/>
                <div className="overlay">
                    <SearchIcon fontSize="large" className="icon"/>
                    <button>View Similar</button>
                    <ShoppingBasketIcon fontSize="large" className="icon"/>
                </div>
            </div>
            <div className="itemContainer">
                <img src={image} alt="#" className="item-image"/>
                <div className="overlay">
                    <SearchIcon fontSize="large" className="icon"/>
                    <button>View Similar</button>
                    <ShoppingBasketIcon fontSize="large" className="icon"/>
                </div>
            </div>
            <div className="itemContainer">
                <img src={image} alt="#" className="item-image"/>
                <div className="overlay">
                    <SearchIcon fontSize="large" className="icon"/>
                    <button>View Similar</button>
                    <ShoppingBasketIcon fontSize="large" className="icon"/>
                </div>
            </div>
            <div className="itemContainer">
                <img src={image} alt="#" className="item-image"/>
                <div className="overlay">
                    <SearchIcon fontSize="large" className="icon"/>
                    <button>View Similar</button>
                    <ShoppingBasketIcon fontSize="large" className="icon"/>
                </div>
            </div>
            <div className="itemContainer">
                <img src={image} alt="#" className="item-image"/>
                <div className="overlay">
                    <SearchIcon fontSize="large" className="icon"/>
                    <button>View Similar</button>
                    <ShoppingBasketIcon fontSize="large" className="icon"/>
                </div>
            </div>
            <div className="itemContainer">
                <img src={image} alt="#" className="item-image"/>
                <div className="overlay">
                    <SearchIcon fontSize="large" className="icon"/>
                    <button>View Similar</button>
                    <ShoppingBasketIcon fontSize="large" className="icon"/>
                </div>
            </div>
            <div className="itemContainer">
                <img src={image} alt="#" className="item-image"/>
                <div className="overlay">
                    <SearchIcon fontSize="large" className="icon"/>
                    <button>View Similar</button>
                    <ShoppingBasketIcon fontSize="large" className="icon"/>
                </div>
            </div>
        </div>
    )
}
