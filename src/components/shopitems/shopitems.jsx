import React, {useState} from 'react';
import img from '../../files/slide-1.jpg';
import img2 from '../../files/slide-2.jpg';
import img3 from '../../files/slide-3.jpg';
import img4 from '../../files/landscape-slide-1.jpg';
import img5 from '../../files/landscape-slide-2.jpg';
import img6 from '../../files/landscape-slide-3.jpg';
import './shopitems.scss';

import { Link } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default function ShopItems() {

    const [image, setImage] = useState(img);
    const [image2, setImage2] = useState(img3);
    const [image3, setImage3] = useState(img5);

    return (
        <div className="shopitems">
            <div className="itemContainer"
                onMouseOver={() => setImage(img2)}
                onMouseOut={() => setImage(img)}>
                
                <img src={image} alt="#" className="item-image"
                />
                <div className="overlay">
                    <Link to='/' className='search-icon'><SearchIcon fontSize="large" className="icon"/></Link>
                    <Link to='/categories' className='similar-btn'>View Similar</Link>
                    <ShoppingBasketIcon fontSize="large" className="icon"/>
                </div>
            </div>
            <div className="itemContainer"
                onMouseOver={() => setImage2(img4)}
                onMouseOut={() => setImage2(img3)}>
                <img src={image2} alt="#" className="item-image"/>
                <div className="overlay">
                    <Link to='/' className='search-icon'><SearchIcon fontSize="large" className="icon"/></Link>
                    <Link to='/categories' className='similar-btn'>View Similar</Link>
                    <ShoppingBasketIcon fontSize="large" className="icon"/>
                </div>
            </div>
            <div className="itemContainer"
                onMouseOver={() => setImage3(img6)}
                onMouseOut={() => setImage3(img5)}>
                <img src={image3} alt="#" className="item-image"/>
                <div className="overlay">
                    <Link to='/' className='search-icon'><SearchIcon fontSize="large" className="icon"/></Link>
                    <Link to='/categories' className='similar-btn'>View Similar</Link>
                    <ShoppingBasketIcon fontSize="large" className="icon"/>
                </div>
            </div>
            <div className="itemContainer"
                onMouseOver={() => setImage(img2)}
                onMouseOut={() => setImage(img)}>
                <img src={image} alt="#" className="item-image"/>
                <div className="overlay">
                    <Link to='/' className='search-icon'><SearchIcon fontSize="large" className="icon"/></Link>
                    <Link to='/categories' className='similar-btn'>View Similar</Link>
                    <ShoppingBasketIcon fontSize="large" className="icon"/>
                </div>
            </div>
        </div>
    )
}
