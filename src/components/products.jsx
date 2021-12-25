import './products.scss';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ItemAccordion from './accordion';

export default function Products() {


    async function itemData() {
        try {
            const data = await fetch("https://fashion4.p.rapidapi.com/v1/version", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "fashion4.p.rapidapi.com",
                    "x-rapidapi-key": "dffcc5f24emsh89532c7a5575c02p168eddjsn47c9716293e9",
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
        
            const response = data.json();

            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='products'>
            <Breadcrumbs aria-label="breadcrumb">
                <Link className='breadcrumb' to="/">
                    MUI
                </Link>
                <Link className='breadcrumb' to="/">
                    Core
                </Link>
                <Typography color="text.primary">Breadcrumbs</Typography>
            </Breadcrumbs>
            <div className="product-container">
                <div className="image-section">
                    {/* <ImageList sx={{ width: 500, height: 450 }} cols={1} rowHeight={164}>
                        {itemData.map(item => (
                            <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            </ImageListItem>
                        ))}
                    </ImageList> */}
                    <p>lasd</p>
                </div>
                <div className="info-section">
                    <h2>Product Title</h2>
                    <p>Price</p>
                    <div className="desc">
                        <h2>Product details</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
                            <br />
                             officia voluptatum eaque omnis impedit voluptatibus at quia pariatur ipsum voluptas!</p>
                    </div>
                    <ItemAccordion />
                </div>
            </div>
        </div>
    )
}
